import * as StateConsts from '../state/Consts';

export class CardActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('goToPrisonCardAction', this.goToPrison.bind(this, 3));
  }

  goToPrison(waitCounter) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    currentPlayer.waitCounter = waitCounter;
    this.game.interface.lock().then(() => {
      return this.game.players.moveTo(currentPlayer, StateConsts.PrisonFieldId);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

}
