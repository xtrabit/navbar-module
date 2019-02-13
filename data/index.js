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

module.exports = {
  getItem,
  getRandomItem
};

