const moves = require('../models/move-model');
var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  res.json(moves);
});

route.get('/:id', (req, res) => {
  res.json(moves[req.params.id]);
});

module.exports = route;