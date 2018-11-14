export class Popups  {

  constructor(game) {
    this.game = game;
    this.state = game.state;
    this.eventBus = game.eventBus;
  }

  open(popup) {
    popup.id = Math.random();
    return this.eventBus.publish('beforeOpenPopup', this.state).then(() => {
      this.state.popups.push(popup);
    }).then(() => {
      return this.eventBus.publishAll(['afterOpenPopup', 'changedPopups'], this.state)
    });
  }

  close(popup) {
    return this.eventBus.publish('beforeClosePopup', this.state).then(() => {
      this.state.popups = this.state.popups.filter((p, ii) => p.id !== popup.id);
    }).then(() => {
      return this.eventBus.publishAll(['afterClosePopup', 'changedPopups'], this.state)
    });
  }

}
