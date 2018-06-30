import EventStream from 'eventing-bus/lib/event_stream';
import {DumpState} from './DumpState';
import {Field} from './Field';

export class GameState  {

  constructor() {
    this.state = new DumpState(0);
    this.eventBus = new EventStream();
    this.fields = [];
  }

  reset(playerNumber) {
    this.state = new DumpState(playerNumber);
    this.initFields();
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

  initFields() {
    this.fields = [];
    this.fields.push(new Field(0, "Start"));
    this.fields.push(new Field(1, "Zakład Goplany"));
    this.fields.push(new Field(2, "Wyzwanie"));
    this.fields.push(new Field(3, "Nowe zoo"));
    this.fields.push(new Field(4, "Rynek jeżycki"));
    this.fields.push(new Field(5, "Ciuchcia"));
    this.fields.push(new Field(6, "Bałtyk Tower"));
    this.fields.push(new Field(7, "Stadion Miejski"));
    this.fields.push(new Field(8, "??Ścieki"));
    this.fields.push(new Field(9, "Zakłady Hipolita"));
    this.fields.push(new Field(10, "Izba wytrzeźwień"));
    this.fields.push(new Field(11, "Port Ławica"));
    this.fields.push(new Field(12, "Rynek łazarski"));
    this.fields.push(new Field(13, "Wyzwanie"));
    this.fields.push(new Field(14, "Park Wilsona"));
    this.fields.push(new Field(15, "Cuchcia"));
    this.fields.push(new Field(16, "Zagadka"));
    this.fields.push(new Field(17, "Pixel"));
    this.fields.push(new Field(18, "Lux"));//klub nocby z lucyfera
    this.fields.push(new Field(19, "iblioteka raczyńskich"));
    this.fields.push(new Field(20, "Idziesz do izby wytrzeźwień"));
    this.fields.push(new Field(21, "Okrąglak"));
    this.fields.push(new Field(22, "Wyzwanie"));
    this.fields.push(new Field(23, "Filharmonia"));
    this.fields.push(new Field(24, "Zus"));
    this.fields.push(new Field(25, "Ciuchcia"));
    this.fields.push(new Field(26, "Stary browar"));
    this.fields.push(new Field(27, "Zagadka"));
    this.fields.push(new Field(28, "Malta"));
    this.fields.push(new Field(29, "Baza lotnicza"));
    this.fields.push(new Field(30, "Uniwersytet Ekonomiczny"));
    this.fields.push(new Field(31, "SPOT"));
    this.fields.push(new Field(32, "Elektrownia"));
    this.fields.push(new Field(33, "Aquanet"));
    this.fields.push(new Field(34, "Kino"));
    this.fields.push(new Field(35, "Ciuchcia"));
    this.fields.push(new Field(36, "Palmiarnia"));
    this.fields.push(new Field(37, "Wyzwania"));
    this.fields.push(new Field(38, "Teatr nowy"));
    this.fields.push(new Field(39, "Stare Zoo"));
  }

}
