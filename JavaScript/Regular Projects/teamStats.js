/*
Team Stats
We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. 
It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. 
For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/
const team = {
    _players: [
      {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
      },
      {
      firstName: 'Herman',
      lastName: 'Jones',
      age: 14
      },
      {
      firstName: 'Jimmy',
      lastName: 'Buffet',
      age: 70
      }
    ],
    _games: [
      {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
      },
      {
      opponent: 'Cowboys',
      teamPoints: 23,
      opponentPoints: 12
      },
      {
      opponent: 'Bengals',
      teamPoints: 24,
      opponentPoints: 32
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName,lastName,age) {
      const newPlayer = {
        firstname: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(newPlayer);
    },
     addGame(opponent,teamPoints,opponentPoints) {
      const newGame = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(newGame);
    }
  };
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  team.addGame('Washingtons',45,54);
  team.addGame('Grizzlies',32,23);
  team.addGame('Pandas',65,56);
  
  
  console.log(team.players);
  console.log(team.games);