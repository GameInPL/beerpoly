import React from 'react';

class Players extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = this.game.state.dump();
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(newState) {
    let promisses = [];
    for(let i=0; i<this.state.players.length; i++) {
      if(this.state.players[i].position != newState.players[i].position) {
        promisses.push(this.movePlayerSlot(newState.players[i]));
      }
    }
    this.state = {
      players: newState.players
    };
    return Promise.all(promisses);
  }

  movePlayerSlot(player) {
    return new Promise((resolve, reject) => this.movePlayer(player, resolve, reject))
  }

  movePlayer(player, resolve, reject) {
    const time = 200;
    let playerElement = document.getElementById("player"+player.idNumber);
    let destFieldNumber = player.position % 40;
    let step = () => {
      var fieldNumber = parseInt(playerElement.getAttribute("fieldNumber")) || 0;
      if(destFieldNumber == fieldNumber) {
        //this.game.eventBus.publish('afterAnimMovePlayer', null);
        resolve();
        return;
      }
      fieldNumber = (parseInt(fieldNumber) + 1) % 40;
      this.movePlayerTo(playerElement, fieldNumber);
      setTimeout(step, time);
    }
    step();
  }

  movePlayerTo(playerElement, fieldNumber) {
    var destElement = document.getElementById('p'+fieldNumber);
    var destRect = destElement.getBoundingClientRect();
    var containerElement = document.getElementById('board');
    var containerRect = containerElement.getBoundingClientRect();
    playerElement.style.top = (destRect.top - containerRect.top) + 'px';
    playerElement.style.left = (destRect.left - containerRect.left) + 'px';
    playerElement.setAttribute("fieldNumber", fieldNumber);
  }

  componentDidMount() {
    for(let i=0; i<this.state.players.length; i++) {
      this.movePlayerSlot(this.state.players[i]);
    }
  }

  render() {
    let players = [];
    for (let i = 0; i < this.state.players.length; i++) {
      let opt = {
        id: 'player'+i,
        key: 'k'+Math.random(),
        fieldNumber: 0
      }
      players.push(<div key="{opt.key}" {...opt}></div>);
    }
    return (
      <div className="players">{players}</div>
    )
  }
};

export default Players;
