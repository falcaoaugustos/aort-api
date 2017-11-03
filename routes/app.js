const chars = require('./char-route');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to AoRT API!');
});

app.use('/chars/', chars);

module.exports = app;