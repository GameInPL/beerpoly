import React from 'react';
import {GameState} from './state/GameState';
import {GameLogic} from './state/GameLogic';
import Players from './board/Players';
import Dices from './board/Dices';
import Money from './board/Money';
import Cards from './board/Cards';
import Popups from './Popups';
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
        <div className="board" id="board">
          <Players gameState={this.gameState} />

          <div className="top-box">
            <div className="card-big top left" id="p0">START</div>
            <div className={'card-top owner-' + this.gameState.state.fields[1].owner}id="p1">
              <div className="label">Zakład Goplany</div>
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[2].owner} id="p2">
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[3].owner}id="p3">
              <div className="label">Nowe zoo</div>
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[4].owner} id="p4">
              <div className="label">Rynek jeżycki</div>
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[5].owner}id="p5">
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[6].owner} id="p6">
              <div className="label">Bałtyk Tower</div>
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[7].owner}id="p7">
              <div className="label">Stadion Miejski</div>
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[8].owner}id="p8">
            </div>
            <div className={'card-top owner-' + this.gameState.state.fields[9].owner} id="p9">
              <div className="label">Zakłady Hipolita</div>
            </div>
            <div className="card-big top right" id="p10">Izba wytrzeźwień</div>
          </div>

          <div className="center-box">
            <div className="left-box">
              <div className={'card-left owner-' + this.gameState.state.fields[39].owner}id="p39">
                <div className="label">Stare Zoo</div>
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[38].owner}id="p38">
                <div className="label">Teatr nowy</div>
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[37].owner}id="p37">
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[36].owner}id="p36">
                <div className="label">Palmiarnia</div>
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[35].owner}id="p35">
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[34].owner}id="p34">
                <div className="label">Kino</div>
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[33].owner}id="p33">
                <div className="label">Aquanet</div>
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[32].owner}id="p32">
              </div>
              <div className={'card-left owner-' + this.gameState.state.fields[31].owner}id="p31">
                <div className="label">SPOT</div>
              </div>
            </div>

            <div className="centrum-box">
              <div className="logo">
                <Money gameState={this.gameState} />
                <Dices gameState={this.gameState} />
                <Cards gameState={this.gameState} />
              </div>
            </div>

            <div className="right-box">
              <div className={'card-right owner-' + this.gameState.state.fields[11].owner}id="p11">
                <div className="label">Port Ławica</div>
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[12].owner}id="p12">
                <div className="label">Rynek łazarski</div>
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[13].owner}id="p13">
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[14].owner}id="p14">
                <div className="label">Park Wilsona</div>
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[15].owner}id="p15">
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[16].owner}id="p16">
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[17].owner}id="p17">
                <div className="label">Pixel</div>
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[18].owner}id="p18">
              </div>
              <div className={'card-right owner-' + this.gameState.state.fields[19].owner}id="p19">
                <div className="label">Biblioteka raczyńskich</div>
              </div>
            </div>
          </div>

          <div className="bottom-box">
            <div className="card-big bottom left" id="p30">Uniwersytet Ekonomiczny </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[29].owner}id="p29">
              <div className="label">Baza lotnicza</div>
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[28].owner}id="p28">
              <div className="label">Malta</div>
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[27].owner}id="p27">
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[26].owner}id="p26">
              <div className="label">Stary browar</div>
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[25].owner}id="p25">
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[24].owner}id="p24">
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[23].owner}id="p23">
              <div className="label">Filharmonia</div>
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[22].owner}id="p22">
            </div>
            <div className={'card-bottom owner-' + this.gameState.state.fields[21].owner}id="p21">
              <div className="label">Okrąglak</div>
            </div>
            <div className="card-big bottom right" id="p20">Idziesz do izby wytrzeźwień</div>
          </div>
          <div className="clear"></div>
          <Popups gameState={this.gameState} />
        </div>

    )
  }
}

export default Board;
