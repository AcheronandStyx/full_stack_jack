const blackjack = require('engine-blackjack-ts')
const actions = blackjack.actions
const Game = blackjack.Game



element.addEventListener("click", function() {
    const game = new Game()
    console.log("new game")
});

const game = new Game()


console.dir(game.getState())