const chars = require('../models/char-model');
var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  res.json(chars);
});

route.get('/:id', (req, res) => {
  res.json(chars[req.params.id]);
});

module.exports = route;