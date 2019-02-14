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

app.get('/emptycart/:user', function(req, res) {
  let user = req.params.user;
  db.emptyCart(user);
  res.end();
});

app.get('/addtocart/:user/:id', function(req, res) {
  let {user, id} = req.params;
  db.addItemToCart(user, id, function(err, qty) {
    res.send('' + qty);
  });
});

app.get('/addrandomtocart/:user', function(req, res) {
  let user = req.params.user;
  db.getRandomItem(function(err, data) {
    if (err) {
      return console.log(err);
    }
    db.addItemToCart(user, data.id, function(err, qty) {
      if (err) {
        return console.log(err);
      }
      console.log(data)
      res.send({item: data, qty: qty});
    })
  })
});

app.get('/signin/:user', function(req, res) {
  let user = req.params.user;
  db.transferCart(user, function(err, qty) {
    if (err) {
      return console.log(err);
    }
    res.send(qty);
  });
});

app.get('/get3randomitems', function(req, res) {
  let itemName = req.params.itemName;
  db.get3RandomItems(function(err, data) {
    if (err) {
      return console.log(err);
    }
    res.send(data)
  });
});

app.listen(port, () => console.log(`sever is listening on port ${port}!`));
