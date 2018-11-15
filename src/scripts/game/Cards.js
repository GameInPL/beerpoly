export class Cards  {

  constructor(game) {
    this.game = game;
    this.state = game.state;
    this.eventBus = game.eventBus;
  }

  takeRandomChance() {
    let randomCard = this.state.chances[Math.floor(Math.random()*this.state.chances.length)];
    return this.game.popups.open({
      type: 'chance',
      state: randomCard,
    });
  }

  takeRandomChallenge() {
    let randomCard = this.state.challenges[Math.floor(Math.random()*this.state.challenges.length)];
    return this.game.popups.open({
      type: 'challenge',
      state: randomCard,
    });
  }

}
