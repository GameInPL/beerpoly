export class Players  {

  constructor(game) {
    this.game = game;
    this.state = game.state;
    this.eventBus = game.eventBus;
  }

  move(player, steps) {
    return this.moveTo(player, player.position + steps);
  }

  moveTo(player, position) {
    return this.eventBus.publishAll(['beforeMovePlayer'], player).then(() => {
      player.position = position;
      player.position = player.position % this.state.fields.length;
      this.state.players[player.idNumber].position = player.position;
      return this.eventBus.publishAll(['afterMovePlayer'], player);
    });
  }

  goTo(player, position) {
    return this.game.players.moveTo(player, position).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.players.triggerField(player);
    }).then(() => {
      return this.game.commit();
    });
  }

  moveAbout(player, steps) {
    let firstPosition = (player.position - steps) % this.state.fields.length;
    firstPosition = firstPosition < 0 ? this.state.fields.length + firstPosition : firstPosition;
    let secondPosition = (player.position + steps) % this.state.fields.length;
    secondPosition = secondPosition < 0 ? this.state.fields.length + secondPosition : secondPosition;
    return this.game.popups.open({
      type: 'switchMovePopup',
      state: {
        player: player,
        steps: steps,
        fields: [
          this.state.fields[firstPosition],
          this.state.fields[secondPosition],
        ]
      }
    });
  }

  getCurrentPlayer() {
    return this.state.players[this.state.tour % this.state.players.length];
  }

  goBankrupt(player) {
    player.isBankrupt = true;
    return this.game.popups.open({
      type: 'bankruptPopup',
      state: {
        player: player
      }
    });
  }

  isBankrupt(player) {
    return Promise.resolve(player.money < 0 || player.isBankrupt);
  }

  preventBankrupt(player) {
    return this.isBankrupt(player).then((isBankrupt) => {
      if(isBankrupt && !player.isBankrupt) {
        return this.goBankrupt(player);
      }
      return null;
    }).then(this.isBankrupt.bind(this, player));
  }

  getWinner() {
    let winner = null;
    for(let i=0; i<this.state.players.length; i++) {
      let player = this.state.players[i];
      if(!player.isBankrupt && player.money>=0) {
        if(winner === null) {
          winner = player;
        } else {
          return null;
        }
      }
    }
    return winner;
  }

  isAllBankrupt() {
    for(let i=0; i<this.state.players.length; i++) {
      let player = this.state.players[i];
      if(!player.isBankrupt && player.money>=0) {
        return false;
      }
    }
    return true;
  }

  triggerField(player) {
    let field = this.state.fields[player.position];
    return this.eventBus.publish(field.action, {
      player: player,
      field: field,
      state: this.state.dump()
    })
  }

}
