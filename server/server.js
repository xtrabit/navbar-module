const parser = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('./../data/index.js');
const port = 3001;
let app = express();

app.use(parser.json());
app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../dist'));
app.use(express.static(__dirname + '/../data'));


app.get('/', function(req, res) {

  res.send('helloooooo!!')
});

app.get('/addtocart/:user', function(req, res) {
  let user = req.params.user;
  console.log('USER', user);
  db.getRandomItem(function(err, data) {
    if (err) {
      return console.log(err);
    }
    console.log('Data at SERVER', data);
    res.send(data);
  })
});

app.get('/:itemName', function(req, res) {
  let itemName = req.params.itemName;
  db.getItem(JSON.parse(itemName), function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(data)
  });
});

app.listen(port, () => console.log(`sever is listening on port ${port}!`));
