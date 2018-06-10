import React from 'react';

class Players extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.state = {
      players: this.gameState.state.players
    }
    this.gameState.eventBus.on('afterMovePlayer', this.movePlayer.bind(this))
  }

  movePlayer(player) {
    var playerElement = document.getElementById("player"+player.idNumber);
    let destFieldNumber = player.position % 40;
    const time = 200;
    let step = () => {
      var fieldNumber = parseInt(playerElement.getAttribute("fieldNumber")) || 0;
      if(destFieldNumber == fieldNumber) return;
      fieldNumber = (parseInt(fieldNumber) + 1) % 40;
      this.movePlayerTo(playerElement, fieldNumber);
      setTimeout(step, time);
    }
    step();
  }

  movePlayerTo(playerElement, fieldNumber) {
    var destElement = document.getElementById('p'+fieldNumber);
    var destRect = destElement.getBoundingClientRect();
    var containerElement = document.getElementById('container');
    var containerRect = containerElement.getBoundingClientRect();
    playerElement.style.top = (destRect.top - containerRect.top) + 'px';
    playerElement.style.left = (destRect.left - containerRect.left) + 'px';
    playerElement.setAttribute("fieldNumber", fieldNumber);
  }

  componentDidMount() {
    for(let i=0; i<this.state.players.length; i++) {
      this.movePlayer(this.state.players[i]);
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
