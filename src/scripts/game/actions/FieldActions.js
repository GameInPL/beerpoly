export class FieldActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('DefaultFieldAction', this.defaultFieldAction.bind(this));
    this.game.eventBus.on('TakeCardAction', this.takeCardAction.bind(this));

  }

  defaultFieldAction(position) {
    let currentPlayer = this.game.players.getCurrentPlayer();
    let field = this.game.state.fields[currentPlayer.position];
    if(field.owner === null) {
      return this.game.popups.open({
        type: 'buyFieldConfirm',
        state: {
          field: field
        }
      });
    } else if(field.owner === currentPlayer.idNumber) {
      // if it is your fild do nothing
      return this.game.nextTour()
    } else if(field.owner !== currentPlayer.idNumber) {
      let invest = field.filedInvestCosts[field.investLvl];
      let owner = this.game.state.players[field.owner];
      owner.money += currentPlayer.money < invest.pay ? currentPlayer.money : invest.pay;
      currentPlayer.money -= invest.pay;
      return this.game.players.preventBankrupt(currentPlayer).then(() => {
        return this.game.nextTour();
      });;
    }
  }

  takeCardAction(position) {
    return this.game.popups.open({
      type: 'takeCardPopup',
      state: {}
    });
  }

}
