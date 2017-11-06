# aort-api

Age of Robots Tactics API

## Usage

- This is a consumption-only API - only the HTTP GET method is available on resources.
- No authentication is required to access this API. All resources are fully open and available.
- If you are going to be regularly using the API, we recommend caching data on your service.

### Resource List

Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API.

### Moves

Moves are the skills of robots in battle. A robot can use your one each turn. Some moves can be used outside of battle phase, usually for the purpose of increase the player battle strategy.

GET moves/{id}
```json
{
  "name": "Protector",
  "description": "If an enemy unit is adjacent to this unit, when that enemy unit attacks, this unit must be the target in that attack. Any melee attack received is decreased by 1/2/3."
}
```

| Key | Value Data Type |
| --- | --------------- |
| name | string |
| description | string |

### Types

Types are properties for robots and their moves. Each type can reveal the regular strongness and weakness of a robot. The player can combine differents types of robots to improve his battle strategy.

GET types/{id}
```json
{
  "name": "Tanker",
  "description": "A tanker have a lot of health points and can ignore some weak enemy units."
}
```

| Key | Value Data Type |
| --- | --------------- |
| name | string |
| description | string |

### Chars

Chars are the robots that inhabit the age of robots games. They fight for his holy and devil goals and ally with others robots to conquer their goals.

GET chars/{id}
```json
{
  "class": "Swordsman",
  "base-points": 10,
  "stats": {
    "health-points": 20,
    "movement-points": 2,
    "damage": 3,
    "area-of-effect": 1,
    "range": 1
  },
  "moves": [{
    "name": "Protector",
    "description": "If an enemy unit is adjacent to this unit, when that enemy unit attacks, this unit must be the target in that attack. Any melee attack received is decreased by 1/2/3."
  }],
  "types": [{
    "name": "Tanker",
    "description": "A tanker have a lot of health points and can ignore some weak enemy units."
  }],
  "forms": {
    "concept-art": "http://url/api/v1/forms/concept-art/swordsman.png",
    "head": "http://url/api/v1/forms/head/swordsman.png"
  }
}
```

| Key | Value Data Type |
| --- | --------------- |
| class | string |
| base-points | integer |
| stats | status object |
| moves | list of moves |
| types | list of types |
| forms | forms object |

## Contributing

Contributions are very welcome! If you'd like to contribute, feel free to send a pull request!

## License

aort-api is released under an MIT license. See LICENSE file for more information.
