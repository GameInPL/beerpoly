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
    this.props.history.push('/board/');
  }

  render() {
    return (
      <div className="home">
        <h1>Liczba Graczy:</h1>
        <ul>
          <li onClick={this.newGame.bind(this, 2)} className='button_player'>2</li>
          <li onClick={this.newGame.bind(this, 3)} className='button_player'>3</li>
          <li onClick={this.newGame.bind(this, 4)} className='button_player'>4</li>
          <li onClick={this.newGame.bind(this, 5)} className='button_player'>5</li>
          <li onClick={this.newGame.bind(this, 6)} className='button_player'>6</li>
          <li onClick={this.continueGame.bind(this)}>Wracam do ostatniej gry</li>
        </ul>
      </div>
    )
  }
}

export default Home;
