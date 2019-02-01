import React from 'react';

class LeftFields extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = props.game.state.dump();
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="left-box">
      <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[9].owner} id="p9">
        <div class="board-border-signs-cross"></div>
          <div className="label">{/*Cmentarz Junikowo*/}</div>
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[8].owner} id="p8">
        <div class="board-border-signs-cross"></div>
          <div className="label">{/*STadion Inea*/}</div>
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[7].owner} id="p7">
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[6].owner} id="p6">
        <div class="board-border-signs-cross"></div>
          <div className="label">{/*Pixel*/}</div>
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[5].owner} id="p5">
        <div class="board-border-signs-Bus-stationL"></div>
          <div className="label">{/*Pętla Tranwajowwa Grunwalt*/}</div>
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[4].owner} id="p4">
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[3].owner} id="p3">
        <div class="board-border-signs-cross"></div>
          <div className="label">{/*Kino Biedronka */}</div>
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[2].owner} id="p2">
        </div>
        <div class="board-border-littleL"></div>
        <div className={'card-left owner-' + this.state.fields[1].owner} id="p1">
        <div class="board-border-signs-Airport"></div>
          <div className="label">{/*Lotnisko Ławica*/}</div>
        </div>
      </div>
    )
  }
};

export default LeftFields;
