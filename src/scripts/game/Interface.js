

export class Interface  {

  constructor(game) {
    this.game = game;
    this.state = game.state;
    this.eventBus = game.eventBus;
  }

  lock() {
    return this.eventBus.publish('lockInterface');
  }

  unlock() {
    return this.eventBus.publish('unlockInterface');
  }

}
