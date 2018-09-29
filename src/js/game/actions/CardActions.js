import * as StateConsts from '../state/Consts';

export class CardActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('goToPrisonCardAction', this.goToPrison.bind(this, 3));
    this.game.eventBus.on('dialectChelangeAction', this.dialectChelange.bind(this));
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

  dialectChelange(){
    this.game.interface.lock().then(() => {
      return this.game.popups.open({
        type: 'confirmChallenge',
        state: {
          yesAction: 'dialectChelangePass',
          noAction: 'dialectChelangeFail'
        }
      });
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }
}
