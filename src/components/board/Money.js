import React from 'react';

class Money extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.state = {
      players: this.gameState.state.players
    }
  }

  render() {
    let players = [];
    for (let i = 0; i < this.state.players.length; i++) {
      let player = this.state.players[i];
      players.push(<div>Player{i}: {player.money}zł </div>);
    }
    return (
      <div id="Many">{players}</div>
    )
  }
};

export default Money;
