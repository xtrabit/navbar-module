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

const addItemToCart = function(user, item_id, callback) {
  db.query(('SELECT id FROM cart WHERE item_id = "' + item_id + '"'), function(err, res) {
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
      db.query(('UPDATE cart SET qty = qty + 1 WHERE item_id = ' + item_id), function(err) {
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

const emptyCart = function(user) {
  db.query(('DELETE FROM cart WHERE user = "' + user + '"'), function(err) {
    if (err) {
      console.log('ERROR cart', err);
      return callback(err);
    }
  });
}

module.exports = {
  getItem,
  getRandomItem,
  addItemToCart,
  emptyCart
};

