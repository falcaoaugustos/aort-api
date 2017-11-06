const chars = require('../models/char-model');
const moves = require('../models/move-model');
const types = require('../models/type-model');
const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
  const objects = chars.slice();
  const newObjects = objects.map(value => deserialize(value));
  res.json(newObjects);
});

route.get('/:id', (req, res) => {
  const object = chars[req.params.id];
  const newObject = deserialize(object);
  res.json(newObject);
});

const deserialize = object => {
  const newObject = {
    ...object,
    moves: moves.map(value => moves[value]),
    types: types.map(value => types[value])
  };
  return newObject;
}

module.exports = route;
