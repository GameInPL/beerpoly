export class FieldActions  {

  constructor(game) {
    this.game = game;
    this.game.eventBus.on('DefaultFieldAction', this.defaultFieldAction.bind(this));
    this.game.eventBus.on('TakeCardAction', this.takeCardAction.bind(this));

  }

  defaultFieldAction(position) {
    let currentPlayer = this.game.getCurrentPlayer();
    let field = this.game.state.fields[currentPlayer.position];
    return this.game.openPopup({
      type: 'buyFieldConfirm',
      state: {
        field: field
      }
    });
  }

  takeCardAction(position) {
    return this.game.openPopup({
      type: 'takeCardPopup',
      state: {}
    });
  }

}
