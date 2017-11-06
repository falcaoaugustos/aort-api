const moves = require('../models/move-model');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.json(moves);
});

route.get('/:id', (req, res) => {
  res.json(moves[req.params.id]);
});

module.exports = route;