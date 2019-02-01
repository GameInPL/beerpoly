import React from 'react';

class RightFields extends React.Component {

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
      <div className="right-box">
      <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[21].owner} id="p21">
        <div class="board-border-signs-Old-Town"></div>
          <div class="board-border-signs"></div>
          <div className="label">{/*Firharmonia*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[22].owner} id="p22">
          <div class="board-border-signs"></div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[23].owner} id="p23">
          <div class="board-border-signs-Old-Town"></div>
          <div className="label">{/*Teatr Wielki*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[24].owner} id="p24">
        <div class="board-border-signs-Old-Town"></div>
          <div className="label">{/*Zamek Cesarski*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[25].owner} id="p25">
          <div class="board-border-signs-Bus-stationR"></div>
          <div className="label">{/*Dworzec Poznań Główny*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[26].owner} id="p26">
        <div class="board-border-signs-Old-Town"></div>
          <div className="label">{/*Hotel Bazar*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[27].owner} id="p27">
        <div class="board-border-signs-Old-Town"></div>
          <div className="label">{/*Bibloteka Raczyńsich*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[28].owner} id="p28">
        <div class="board-border-signs-Energy"></div>
          <div className="label">{/*Aquanet*/}</div>
        </div>
        <div class="board-border-littleR"></div>
        <div className={'card-right owner-' + this.state.fields[29].owner} id="p29">
        <div class="board-border-signs-Old-Town"></div>
          <div className="label">{/*Fara*/}</div>
        </div>
      </div>
    )
  }
};

export default RightFields;
