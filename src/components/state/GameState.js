import EventStream from 'eventing-bus/lib/event_stream';
import {DumpState} from './DumpState';

export class GameState  {

  constructor() {
    this.state = new DumpState(0);
    this.eventBus = new EventStream();
  }

  reset(playerNumber) {
    this.state = new DumpState(playerNumber);
    this.eventBus.publish('afterReset', this.state);
  }

  save() {
    localStorage.setItem('state', JSON.stringify(this.state));
    this.eventBus.publish('afterSave', this.state);
  }

  load() {
    let json = localStorage.getItem('state');
    this.state = JSON.parse(json);
    this.eventBus.publish('afterLoad', this.state);
  }

  getCurrentPlayer() {
    return this.state.players[this.state.tour % this.state.players.length];
  }

  moveCurrentPlayer(steps) {
    let currentPlayer = this.getCurrentPlayer();
    this.eventBus.publish('beforeMovePlayer', currentPlayer);
    currentPlayer.position += steps;
    this.eventBus.publish('afterMovePlayer', currentPlayer);
  }

  nextTour() {
    this.eventBus.publish('beforeNextTour', this.state);
    this.state.tour++;
    this.eventBus.publish('afterNextTour', this.state);
  }

}
