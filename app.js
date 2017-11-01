var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to AoRT API!');
});

app.listen(3000, _ => console.log('Listening on the port 3000...'));