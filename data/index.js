const mysql = require('mysql');
const config = require('./config.js');

const db = mysql.createConnection(config);

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('mySQL CONNECTED!');
  }
});

const getItem = function(itemName, callback) {
  db.query(('SELECT * FROM inventory WHERE item_name = "' + itemName + '"'), function(err, res) {
    if (err) {
      console.log('ERROR inventory', err);
      return callback(err);
    }
    callback(null, res);
    // db.end();
  });
};

const getRandomItem = function(callback) {
  db.query(('SELECT * FROM inventory'), function(err, res) {
    if (err) {
      console.log('ERROR inventory', err);
      return callback(err);
    }
    let random = res[~~(Math.random() * res.length)];
    callback(null, random);
  });
};

const get3RandomItems = function(callback) {
  db.query(('SELECT * FROM inventory'), function(err, res) {
    if (err) {
      console.log('ERROR inventory', err);
      return callback(err);
    }
    let threeItems = [];
    for (var i = 0; i < 3; i++) {
      let random = res[~~(Math.random() * res.length)];
      threeItems.push(random);
    }
    callback(null, threeItems);
  });
};

const addItemToCart = function(user, item_id, callback) {
  // item_id = 60;
  db.query(('SELECT id FROM cart WHERE item_id = ' + item_id + ' AND user = "' + user + '"'), function(err, res) {
    if (err) {
      return console.log(err);
    }
    if (!res.length) {
      db.query(('INSERT INTO cart (user, item_id, qty) VALUES ("' + user + '",' + item_id + ',' + 1 + ')'), function(err) {
        if (err) {
          console.log('ERROR cart', err);
          return callback(err);
        }
      });
    } else {
      db.query(('UPDATE cart SET qty = qty + 1 WHERE item_id = ' + item_id + ' AND user = "' + user + '"'), function(err) {
        if (err) {
          console.log('ERROR cart', err);
          return callback(err);
        }
      });
    }
    db.query(('SELECT * FROM cart WHERE user = "' + user + '"'), function(err, res) {
      if (err) {
        console.log('ERROR cart', err);
        return callback(err);
      }
      let quantity = res.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      callback(null, quantity);
    });
  });
};

const transferCart = function(user, callback) {
  db.query(('UPDATE cart SET user = "' + user + '" WHERE user = "anonymous"'), function(err) {
    if (err) {
      console.log('ERROR transferCart', err);
      return callback(err);
    }
    getUserQty(user, callback);
  });
};

const emptyCart = function(user) {
  db.query(('DELETE FROM cart WHERE user = "' + user + '"'), function(err) {
    if (err) {
      console.log('ERROR cart', err);
      return callback(err);
    }
  });
}

const getUserQty = function(user, callback) {
  db.query(('SELECT * FROM cart WHERE user = "' + user + '"'), function(err, res) {
    if (err) {
      console.log('ERROR getUserQty', err);
      return callback(err);
    }
    let quantity = res.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    callback(null, '' + quantity);
  });
};

const search = function(str, callback) {
  db.query(('SELECT * FROM inventory'), function(err, res) {
    if (err) {
      console.log('ERROR inventory', err);
      return callback(err);
    }
    let found = findInItems(str, res);
    callback(null, found);
  });
}

const findInItems = function(str, items) {
  let result = {items: [], trending: [], found: []};
  let qty = 0;
  for (var i = 0; i < items.length; i++) {
    let found = findStr(str, items[i].item_name);
    if (found) {
      result.items.push(items[i]);
      result.items[result.items.length - 1].match = found.match;
      if (qty < 5) {
        result.trending.push(found.trending);
        result.found.push(found.found);
        qty++;
      }
    }
  }
  result.items = sortMatches(result.items);
  return result;
}

const findStr = function(str, itemName) {
  itemName = itemName.toLowerCase();
  let name = itemName.split(' ');
  let keys = str.split(' ');
  let trending;
  let found;
  let match = 0;

  let runAgain = function(str, itemName) {
    let keys = str.split(' ').map((item) => {
      let temp = item.slice(0, -1);
      return temp ? temp : item;
    }).join(' ');
    if (keys.length === str.length) return null;
    let result = findStr(keys, itemName);
    if (result && result.trending) {
      return result;
    } else if (result !== null) {
      return runAgain(str, itemName);
    }
    return null;
  }

  for (var i = 0; i < keys.length; i++) {
    for (var j = 0; j < name.length; j++) {
      if (name[j].includes(keys[i])) {
        trending = name[0];
        found = name[j];
        match = keys[i].length;
        if (j < name.length - 1) {
          found += ' ' + name[j + 1];
        }
      }
      if (trending) break;
    }
    if (trending) break;
  }
  if (!trending) {
    return runAgain(str, itemName)
  }
  return {trending: trending, found: found, match: match};
}

const sortMatches = function(items) {
  let original = [...items];
  let sort = function(items) {
    let sorted = true;
    for (var i = 0; i < items.length - 1; i++) {
      if (items[i].match < items[i + 1].match) {
        sorted = false;
        let temp = items[i];
        items[i] = items[i + 1];
        items[i + 1] = temp;
      }
    }
    return !sorted ? sort(items) : items;
  }
  let sorted = sort(items).slice(0, 3);

  return sorted;
}

module.exports = {
  getItem,
  getRandomItem,
  addItemToCart,
  emptyCart,
  transferCart,
  get3RandomItems,
  search
};

