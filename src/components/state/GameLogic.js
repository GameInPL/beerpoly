import EventStream from 'eventing-bus/lib/event_stream';
import {DumpState} from './DumpState';

export class GameLogic  {

  constructor(gameState) {
    this.gameState = gameState;
    this.eventBus = gameState.eventBus;
  }

  init(){
    this.eventBus.on('doMoveCurrentPlayer', this.moveCurrentPlayer.bind(this));
    this.eventBus.on('doNextTour', this.nextTour.bind(this));
    this.eventBus.on('doOpenPopup', this.openPopup.bind(this));
    this.eventBus.on('doClosePopup', this.closePopup.bind(this));
    this.eventBus.on('afterMoveCurrentPlayer', this.playerStop.bind(this));
  }

  moveCurrentPlayer(steps) {
    let currentPlayer = this.gameState.getCurrentPlayer();
    this.eventBus.publish('beforeCurrentMovePlayer', currentPlayer);
    this.eventBus.publish('beforeMovePlayer', currentPlayer);
    currentPlayer.position += steps;
    this.eventBus.publish('afterMoveCurrentPlayer', currentPlayer);
    this.eventBus.publish('afterMovePlayer', currentPlayer);
    this.gameState.save();
  }

  nextTour() {
    this.eventBus.publish('beforeNextTour', this.state);
    this.gameState.state.tour++;
    this.eventBus.publish('afterNextTour', this.state);
    this.gameState.save();
  }

  openPopup(popup) {
    this.eventBus.publish('beforeAddPopup', popup);
    this.gameState.state.popups.push(popup);
    this.eventBus.publish('afterAddPopup', popup);
    this.eventBus.publish('changedPopups');
    this.gameState.save();
  }

  closePopup(popup) {
    this.eventBus.publish('beforeClosePopup', popup);
    this.gameState.state.popups = this.gameState.state.popups.filter((p, ii) => p !== popup);
    this.eventBus.publish('afterClosePopup', popup);
    this.eventBus.publish('changedPopups');
    this.gameState.save();
  }

  playerStop(currentPlayer){
    let field = this.getPlayerField(currentPlayer.position);
    confirm('Czy chcesz kupić '+field.name);
  }

  getPlayerField(idNumber){
    var fields = this.gameState.state.fields;
    for(var i=fields.length-1; i>=0; i--) {
      var field = fields[i];
      if (idNumber === field.idNumber) {
        return field;
      }
    }
    // jeśli nie znalazl to wyjebać
    throw "Error: There is not field " + currentPlayer.position;
  }

}