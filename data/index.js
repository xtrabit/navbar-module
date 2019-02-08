const mysql = require('mysql');
const config = require('./config.js');

const db = mysql.createConnection(config);

// db.connect();
const getItem = function(item, callback) {
  db.query('SELECT * FROM inventory;', function(err, res) {
    if (err) {
      console.log('ERROR inventory', err);
      return callback(err);
    }
    callback(null, res);
    // db.end();
  });
};

module.exports = {
  getAllLines,
  getStops,
  updateStations
};

