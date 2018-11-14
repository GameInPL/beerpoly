export class GameActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('beforeNextTour', this.updateGameStatus.bind(this));
    this.game.eventBus.on('afterNextTour', this.preventBankrupt.bind(this));

  }

  updateGameStatus() {
    return this.game.theEnd.updateGameStatus();
  }

  preventBankrupt() {
    let currentPlayer = this.game.players.getCurrentPlayer();
    return this.game.players.preventBankrupt(currentPlayer);
  }

}
