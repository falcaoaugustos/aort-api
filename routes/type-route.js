const types = require('../models/type-model');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  res.json(types);
});

route.get('/:id', (req, res) => {
  res.json(types[req.params.id]);
});

module.exports = route;