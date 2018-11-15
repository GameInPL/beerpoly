import React from 'react';

class Money extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = this.game.state.dump();
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(state) {
    this.setState(state);
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
