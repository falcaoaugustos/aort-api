var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Welcome to AoRT API!');
});

app.get('/chars/1', (req, res) => {
  res.json({
    "id": 1,
    "class": "swordsman",
    "base-points": 10,
    "stats": {
      "health-points": 20,
      "movement-points": 2,
      "damage": 3,
      "area-of-effect": 1,
      "range": 1
    },
    "moves": [
      {
        "name": "protector",
        "url": "http://url/api/v1/moves/1/"
      }
    ],
    "types": [
      {
        "name": "fighter",
        "url": "http://url/api/v1/types/1/"
      }
    ],
    "forms": {
      "concept-art": "http://url/api/v1/forms/concept-art/1.png",
      "head": "http://url/api/v1/forms/head/1.png"
    }
  });
});

app.listen(3000, _ => console.log('Listening on the port 3000...'));