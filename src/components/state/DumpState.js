import {Player} from './Player';
import {Chance} from './Chance';

export class DumpState  {

  constructor(playerNumber) {
    this.tour = 0;
    this.dices = [];
    this.players = [];
    this.chances = [];
    this.popups = [{type:"chance", state:{}}];
    playerNumber = playerNumber || 2;
    playerNumber = playerNumber<=6 ? playerNumber : 6;
    playerNumber = playerNumber<2 ? 2 : playerNumber;
    for(let i=0; i<playerNumber; i++) {
      this.players.push(new Player(i));
    }
    this.loadChances();
  }

  loadChances() {
    this.chances = [];
    this.chances.push(new Chance('chance1', 'chance1 description', 'eventAfterChance1'));
    this.chances.push(new Chance('chance2', 'chance2 description', 'eventAfterChance2'));
  }

}
