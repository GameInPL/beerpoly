import React from 'react';
import Players from './board/Players';
import {GameState} from './state/GameState';
import {GameLogic} from './state/GameLogic';
import Dices from './board/Dices';
import Money from './board/Money';
import EventStream from 'eventing-bus/lib/event_stream';

class Board extends React.Component {

  constructor(props) {
    super(props);
    let gameState = new GameState();
    let gameLogic = new GameLogic(gameState);
    gameLogic.init();
    gameState.load();
    this.gameState = gameState;
  }

  render() {
    return (
      <div className="board">
        <Players gameState={this.gameState} />

        <div className="top-box">
          <div className="card-big top left" id="p0">START</div>
          <div className="card-top" id="p1">
            <div className="label">Zakład Goplany</div>
          </div>
          <div className="card-top" id="p2">
          </div>
          <div className="card-top" id="p3">
            <div className="label">Nowe zoo</div>
          </div>
          <div className="card-top" id="p4">
            <div className="label">Rynek jeżycki</div>
          </div>
          <div className="card-top" id="p5">
          </div>
          <div className="card-top" id="p6">
            <div className="label">Bałtyk Tower</div>
          </div>
          <div className="card-top" id="p7">
            <div className="label">Stadion Miejski</div>
          </div>
          <div className="card-top" id="p8">
          </div>
          <div className="card-top" id="p9">
            <div className="label">Zakłady Hipolita</div>
          </div>
          <div className="card-big top right" id="p10">Izba wytrzeźwień</div>
        </div>

        <div className="center-box">
          <div className="left-box">
            <div className="card-left" id="p39">
              <div className="label">Stare Zoo</div>
            </div>
            <div className="card-left" id="p38">
              <div className="label">Teatr nowy</div>
            </div>
            <div className="card-left" id="p37">
            </div>
            <div className="card-left" id="p36">
              <div className="label">Palmiarnia</div>
            </div>
            <div className="card-left" id="p35">
            </div>
            <div className="card-left" id="p34">
              <div className="label">Kino</div>
            </div>
            <div className="card-left" id="p33">
              <div className="label">Aquanet</div>
            </div>
            <div className="card-left" id="p32">
            </div>
            <div className="card-left" id="p31">
              <div className="label">SPOT</div>
            </div>
          </div>

          <div className="centrum-box">
            <div className="logo">
              <Money gameState={this.gameState} />
              <Dices gameState={this.gameState} />
            </div>
          </div>

          <div className="right-box">
            <div className="card-right" id="p11">
              <div className="label">Port Ławica</div>
            </div>
            <div className="card-right" id="p12">
              <div className="label">Rynek łazarski</div>
            </div>
            <div className="card-right" id="p13">
            </div>
            <div className="card-right" id="p14">
              <div className="label">Park Wilsona</div>
            </div>
            <div className="card-right" id="p15">
            </div>
            <div className="card-right" id="p16">
            </div>
            <div className="card-right" id="p17">
              <div className="label">Pixel</div>
            </div>
            <div className="card-right" id="p18">
            </div>
            <div className="card-right" id="p19">
              <div className="label">Biblioteka raczyńskich</div>
            </div>
          </div>
        </div>

        <div className="bottom-box">
          <div className="card-big bottom left" id="p30">Uniwersytet Ekonomiczny </div>
          <div className="card-bottom" id="p29">
            <div className="label">Baza lotnicza</div>
          </div>
          <div className="card-bottom" id="p28">
            <div className="label">Malta</div>
          </div>
          <div className="card-bottom" id="p27">
          </div>
          <div className="card-bottom" id="p26">
            <div className="label">Stary browar</div>
          </div>
          <div className="card-bottom" id="p25">
          </div>
          <div className="card-bottom" id="p24">
          </div>
          <div className="card-bottom" id="p23">
            <div className="label">Filharmonia</div>
          </div>
          <div className="card-bottom" id="p22">
          </div>
          <div className="card-bottom" id="p21">
            <div className="label">Okrąglak</div>
          </div>
          <div className="card-big bottom right" id="p20">Idziesz do izby wytrzeźwień</div>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}

export default Board;
