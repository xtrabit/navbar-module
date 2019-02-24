const dotenv = require('dotenv');
dotenv.config();
const parser = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('./../data/index.js');
const port = 3001;
let app = express();

console.log('environment variables:');
console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
});

app.use(parser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../dist'));
app.use(express.static(__dirname + '/../data'));


app.get('/', function(req, res) {

  res.send('helloooooo!!')
});

app.get('/search/:str', function(req, res) {
  let str = req.params.str;
  db.search(str, function(err, items) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    res.send(items);
  });
});

app.get('/emptycart/:user', function(req, res) {
  let user = req.params.user;
  db.emptyCart(user, function(err) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    res.end();
  });
});

app.get('/addtocart/:user/:id', function(req, res) {
  let {user, id} = req.params;
  db.getItemById(id, function(err, data) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    db.addItemToCart(user, id, function(err, qty) {
      if (err) {
        console.error(err);
        res.status(404).send();
        return;
      }
      res.send({item: data, qty: qty});
    });
  });
});

app.get('/addrandomtocart/:user', function(req, res) {
  let user = req.params.user;
  db.getRandomItem(function(err, data) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    db.addItemToCart(user, data.id, function(err, qty) {
      if (err) {
        console.error(err);
        res.status(404).send();
        return;
      }
      res.send({item: data, qty: qty});
    });
  });
});

app.get('/signin/:user', function(req, res) {
  let user = req.params.user;
  db.transferCart(user, function(err, qty) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    res.send(qty);
  });
});

app.get('/get3randomitems', function(req, res) {
  let itemName = req.params.itemName;
  db.get3RandomItems(function(err, data) {
    if (err) {
      console.error(err);
      res.status(404).send();
      return;
    }
    res.send(data)
  });
});

app.get('/:productID', (request, response) => {
  let productID = request.params.productID;

  if (isNaN(Number(productID))) {
    console.log('Check product ID number!');
    response.status(404).send();
  } else {
    response.redirect(`/index.html?productID=${productID}`);
  }
 });

app.listen(port, () => console.log(`sever is listening on : ${process.env.MY_URL} :)`));
