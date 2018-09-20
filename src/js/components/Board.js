import React from 'react';
import {Game} from '../game/game';
import Players from './board/Players';
import Dices from './board/Dices';
import Money from './board/Money';
import Cards from './board/Cards';
import TopFields from './board/TopFields';
import LeftFields from './board/LeftFields';
import RightFields from './board/RightFields';
import BottomFields from './board/BottomFields';
import Popups from './Popups';

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.game = new Game();
    this.game.state.load();
  }

  render() {
    return (
      <div className="board" id="board">
        <Players game={this.game} />
        <TopFields game={this.game} />
        <div className="center-box">
          <LeftFields game={this.game} />
          <div className="centrum-box">
            <div className="logo">
              <Money game={this.game} />
              <Dices game={this.game} />
              <Cards game={this.game} />
            </div>
          </div>
          <RightFields game={this.game} />
        </div>
        <BottomFields game={this.game} />
        <div className="clear"></div>
        <Popups game={this.game} />
      </div>
    )
  }
}

export default Board;
