const blackjack = require('engine-blackjack-ts')
const actions = blackjack.actions
const Game = blackjack.Game

const game = new Game(); // default loaded unless specified

console.dir(game.getState())