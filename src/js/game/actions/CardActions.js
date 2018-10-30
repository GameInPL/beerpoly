import * as StateConsts from '../state/Consts';

export class CardActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('goToPrisonCardAction', this.goToPrison.bind(this, 3));
    this.game.eventBus.on('waitOneTourCardAction', this.waitXTours.bind(this, 1));
    this.game.eventBus.on('goToTheCityStadiumCardAction', this.goToField.bind(this, StateConsts.CityStadiumFieldId));
    this.game.eventBus.on('take200ZLCardAction', this.takeCasch.bind(this, 200));
    this.game.eventBus.on('take50ZLCardAction', this.takeCasch.bind(this, 50));
    this.game.eventBus.on('lose100ZLCardAction', this.takeCasch.bind(this, 100));
    this.game.eventBus.on('otherPlayersLose25ZL', this.takeCasch.bind(this, 25));

  }

  goToPrison(waitCounter) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    currentPlayer.waitCounter = waitCounter;
    return this.game.interface.lock().then(() => {
      return this.game.players.moveTo(currentPlayer, StateConsts.PrisonFieldId);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

  waitXTours(waitCounter) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    currentPlayer.waitCounter = waitCounter;
    return this.game.interface.lock().then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

  goToField(fieldId) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    return this.game.interface.lock().then(() => {
      return this.game.players.moveTo(currentPlayer, fieldId);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

  takeCasch(money) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    currentPlayer.money += money;
    return this.game.interface.lock().then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

  loseCasch(money) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    currentPlayer.money -= money;
    return this.game.interface.lock().then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

  otherPlayersLoseCasch(money) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    for(let i=0; i++; i<this.game.players.length) {
      let player = this.game.players[i];
      if(player.idNumber === currentPlayer.idNumber) {
        continue;
      }
      player -= money;
    }
    return this.game.interface.lock().then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }

}
