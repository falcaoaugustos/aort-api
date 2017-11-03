const chars = require('../models/char-model');
const moves = require('../models/move-model');
const types = require('../models/type-model');
var express = require('express');
var route = express.Router();

route.get('/', (req, res) => {
  var objects = chars.slice();
  var newObjects = objects.map((value) => {
    return deserialize(value);
  }); 
  res.json(newObjects);
});

route.get('/:id', (req, res) => {
  var object = chars[req.params.id];
  var newObject = deserialize(object);
  res.json(newObject);
});

function deserialize(object) {
  var newObject = Object.assign({}, object);
  newObject.moves = object.moves.map((value) => {
    return moves[value];
  });
  newObject.types = object.types.map( (value) => { 
    return types[value];
  });
  return newObject;
}

module.exports = route;