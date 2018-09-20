import {EventBus} from './EventBus';
import {State} from './state/State';

export class Game  {

  constructor(gameState) {
    this.state = new State();
    this.eventBus = new EventBus();
  }

  commit() {
    let dump = this.state.dump();
    return this.eventBus.publish('commit', dump);
  }

  moveCurrentPlayer(steps) {
    let currentPlayer = this.getCurrentPlayer();
    return this.eventBus.publishAll(['beforeCurrentMovePlayer', 'beforeMovePlayer'], currentPlayer).then(() => {
      currentPlayer.position += steps;
      currentPlayer.position = currentPlayer.position % this.state.fields.length;
      return this.eventBus.publishAll(['afterMoveCurrentPlayer', 'afterMovePlayer'], currentPlayer);
    }).then(() => {
      return this.commit();
    }).then(() => {
      let field = this.state.fields[currentPlayer.position];
      return this.openPopup({
        type: 'buyFieldConfirm',
        state: {
          field: field
        }
      });
    }).then(() => {
      return this.commit();
    });
  }

  nextTour() {
    return this.eventBus.publish('beforeNextTour', this.state).then(() => {
      this.state.tour++;
    }).then(() => {
      return this.eventBus.publish('afterNextTour', this.state)
    });
  }

  openPopup(popup) {
    popup.id = Math.random();
    return this.eventBus.publish('beforeOpenPopup', this.state).then(() => {
      this.state.popups.push(popup);
    }).then(() => {
      return this.eventBus.publishAll(['afterOpenPopup', 'changedPopups'], this.state)
    });
  }

  closePopup(popup) {
    return this.eventBus.publish('beforeClosePopup', this.state).then(() => {
      this.state.popups = this.state.popups.filter((p, ii) => p.id !== popup.id);
    }).then(() => {
      return this.eventBus.publishAll(['afterClosePopup', 'changedPopups'], this.state)
    });
  }

  getCurrentPlayer() {
    return this.state.players[this.state.tour % this.state.players.length];
  }

}
