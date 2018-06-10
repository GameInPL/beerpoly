import {Player} from './Player';

export class DumpState  {

  constructor(playerNumber) {
    this.tour = 0;
    this.dices = [];
    this.players = [];
    playerNumber = playerNumber || 2;
    playerNumber = playerNumber<=6 ? playerNumber : 6;
    playerNumber = playerNumber<2 ? 2 : playerNumber;
    for(let i=0; i<playerNumber; i++) {
      this.players.push(new Player(i));
    }
  }

}
