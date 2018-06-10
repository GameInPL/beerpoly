import React from 'react';
import {Link} from 'react-router-dom';
import {GameState} from './state/GameState';

class Home extends React.Component {

  newGame(playersNumber) {
    let gameState = new GameState();
    gameState.reset(playersNumber);
    gameState.save();
    this.props.history.push('/board');
  }

  continueGame() {
    this.props.history.push('/board');
  }

  render() {
    return (
      <div className="home">
        <h1>Liczba Graczy:</h1>
        <ul>
          <li onClick={this.newGame.bind(this, 2)}>Nowa gra dla 2 graczy</li>
          <li onClick={this.newGame.bind(this, 3)}>Nowa gra dla 3 graczy</li>
          <li onClick={this.newGame.bind(this, 4)}>Nowa gra dla 4 graczy</li>
          <li onClick={this.newGame.bind(this, 5)}>Nowa gra dla 5 graczy</li>
          <li onClick={this.newGame.bind(this, 6)}>Nowa gra dla 6 graczy</li>
          <li onClick={this.continueGame.bind(this)}>Wracam do ostatniej gry</li>
        </ul>
      </div>
    )
  }
}

export default Home;
