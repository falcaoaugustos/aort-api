const chars = require('./char-route');
const moves = require('./move-route');
const types = require('./type-route');
var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to AoRT API!');
});

app.use('/chars/', chars);
app.use('/moves/', moves);
app.use('/types/', types);

module.exports = app;