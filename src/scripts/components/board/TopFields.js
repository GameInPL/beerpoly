import React from 'react';

class TopFields extends React.Component {

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
      <div className="top-box">
        <div className="card-big top left" id="p10">{/*Izba wytrzeźwień*/}</div>
          <div class="board-border-bigLU"></div>
        <div className={'card-top owner-' + this.state.fields[11].owner} id="p11">
        <div id="board-border-signs-zoombi" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/* Palmiarnia */}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[12].owner} id="p12">
        <div id="board-border-signs-Energy" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Elektrociepłownia Veolia*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[13].owner} id="p13">
        <div id="board-border-signs-zoombi" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Rynek Łazarski*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[14].owner} id="p14">
        <div id="board-border-signs-zoombi" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Targi Poznańskie*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[15].owner} id="p15">
          <div id="board-border-signs-Bus-stationU" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Postój taksówek*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[16].owner} id="p16">
        <div id="board-border-signs-zoo" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Stare Zoor*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[17].owner} id="p17">
        <div class="board-border-littleD"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[18].owner} id="p18">
        <div id="board-border-signs-zoo" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Rynek Jezycki*/}</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[19].owner} id="p19">
        <div id="board-border-signs-zoo" class="board-border-signsU"></div>
        <div class="board-border-littleD"></div>
          <div className="label">{/*Bałtyk Tower*/}</div>
        </div>
        <div className="card-big top right" id="p20">{/*Okrąglak Punkt Widokowy*/}
          <div class="board-border-bigRU"></div>
        </div>
      </div>
    )
  }
};

export default TopFields;
