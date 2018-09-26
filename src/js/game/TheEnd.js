export class TheEnd  {

  constructor(game) {
    this.game = game;
    this.state = game.state;
    this.eventBus = game.eventBus;
  }

  updateGameStatus() {
    debugger;
    let winner = this.game.players.getWinner();
    if(winner) {
      if(this.state.status !== 'winner') {
        this.goWinner(winner);
      }
      this.state.status = 'winner';
      this.state.winner = winner;
      return Promise.resolve(this.state.status);
    }
    if(this.game.players.isAllBankrupt()) {
      if(this.state.status !== 'allBankrupt') {
        this.goAllBankrupt();
      }
      this.state.status = 'allBankrupt';
      this.state.winner = null;
      return Promise.resolve(this.state.status);
    }
    this.state.status = 'fight';
    this.state.winner = null;
    return Promise.resolve(this.state.status);
  }

  goWinner(winner) {
    let state = this.state;
    for(let i=0; i<state.fields.length; i++) {
      state.fields[i].owner = winner.idNumber;
    }
    return this.game.popups.open({
      type: 'winnerPopup',
      state: {
        winner: winner
      }
    });
  }

  goAllBankrupt() {
    let state = this.state;
    for(let i=0; i<state.fields.length; i++) {
      state.fields[i].owner = null;
    }
    for(let i=0; i<state.players.length; i++) {
      state.players[i].isBankrupt = true;
    }
    return this.game.popups.open({
      type: 'allBankruptPopup',
      state: {}
    });
  }


}
