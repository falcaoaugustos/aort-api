const types = require('../models/type-model');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(types);
});

router.get('/:id', (req, res) => {
  res.json(types[req.params.id]);
});

module.exports = router;