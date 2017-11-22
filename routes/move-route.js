const moves = require('../models/move-model');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(moves);
});

router.get('/:id', (req, res) => {
  res.json(moves[req.params.id]);
});

module.exports = router;