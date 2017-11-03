const types = require('../models/type-model');
var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  res.json(types);
});

route.get('/:id', (req, res) => {
  res.json(types[req.params.id]);
});

module.exports = route;