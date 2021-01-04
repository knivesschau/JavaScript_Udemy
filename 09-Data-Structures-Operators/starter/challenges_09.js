'use strict'

// coding challenge #1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'Gnarby',
        'Lewandowski',
        ],
        [
        'Burki',
        'Schulz',
        'Hummels',
        'Akanji',
        'Hakimi',
        'Weigl',
        'Witsel',
        'Hazard',
        'Brandt',
        'Sancho',
        'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// players arrays for each team (destructure the array)
const [players1, players2] = game.players;
console.log(players1, players2);

// rest operator to distinguish goal keeper, then put rest of players into array
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// use spread operator to put all players from both teams into one array 
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// use spread operator to put all players in AND the substitute players into one array
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// objects with game odds, nested destructuring to obtain data
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// printGoals function with rest parameters 
const printGoals = function(...players) {
    console.log(`${players.length} goals were scored`);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// who is more likely to win with && operator 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

// coding challenge #2
// looping over game.scored array
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// looping to calcuate average odds
const gameOdds = Object.values(game.odds);
let avg = 0;

for (const chance of gameOdds) {
    avg += chance;
}

avg /= gameOdds.length;
console.log(avg);

// printing odds
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}