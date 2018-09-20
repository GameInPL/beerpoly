import React from 'react';
import {Link} from 'react-router-dom';
import {Game} from '../Game/Game';

class Home extends React.Component {

  constructor() {
    super();
    this.game = new Game();
  }

  newGame(playersNumber) {
    this.game.state.init(playersNumber);
    this.game.state.save();
    this.props.history.push('/board/');
  }

  continueGame() {
    this.props.history.push('/board/');
  }

  render() {
    return (
      <div className="home">
        <div className="home-menu">
          <div className="home-blure-wrap">
            <div className="home-blure-bg">
            </div>
          </div>
          <div className="home-menu-list">
            { this.game.state.hasPersistGame() ? this.renderContinue() : '' }
            <h1>Nowa gra:</h1>
            <ul>
              <li onClick={this.newGame.bind(this, 2)} className='button_player'>2 Graczy</li>
              <li onClick={this.newGame.bind(this, 3)} className='button_player'>3 Graczy</li>
              <li onClick={this.newGame.bind(this, 4)} className='button_player'>4 Graczy</li>
              <li onClick={this.newGame.bind(this, 5)} className='button_player'>5 Graczy</li>
              <li onClick={this.newGame.bind(this, 6)} className='button_player'>6 Graczy</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  renderContinue() {
    return (
      <div className="continue">
        <h1>Wracam do gry:</h1>
        <ul>
          <li onClick={this.continueGame.bind(this)} className="button_player">Ostatnia gra</li>
        </ul>
      </div>
    )
  }

}

export default Home;
