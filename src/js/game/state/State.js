import {DumpState} from './DumpState';

export class State extends DumpState  {

  constructor(playerNumber) {
    super(playerNumber);
  }

  save() {
    let persistState = this.getPersistState();
    localStorage.setItem('state', JSON.stringify(persistState));
  }

  hasPersistGame() {
    return localStorage.getItem('state') !== null;
  }

  load() {
    let json = localStorage.getItem('state');
    let persistState = JSON.parse(json);
    this.initPersistState(persistState);
  }

  getPersistState() {
    return {
      tour: this.tour,
      dices: this.dices,
      players: this.players,
      popups: this.popups,
      fields: this.fields
    }
  }

  initPersistState(state) {
    this.tour = state.tour;
    this.dices = state.dices;
    this.players = state.players;
    this.popups = state.popups;
    this.fields = state.fields;
    this.initChances()
    this.initChallenges();
  }


}
