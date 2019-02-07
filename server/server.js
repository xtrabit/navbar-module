const parser = require('body-parser');
const express = require('express');
const path = require('path');
const port = 3000;
let app = express();

app.use(express.static(__dirname + '/../public'));
app.use(express.static(__dirname + '/../dist'));

app.use(parser.json());

app.get('/', function(req, res) {

  res.send('helloooooo!!')
});

app.listen(port, () => console.log(`sever is listening on port ${port}!`));
