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
        <div className="card-big top left" id="p10">
          {/*Izba wytrzeźwień*/}
          <div class="field-corner-border-left"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[11].owner} id="p11">
          {/* Palmiarnia */}
          <div class="field-border"></div>
          <div class="p-group-zombie p-group"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[12].owner} id="p12">
          {/*Elektrociepłownia Veolia*/}
          <div class="p-group-energy p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[13].owner} id="p13">
          {/*Rynek Łazarski*/}
          <div class="p-group-zombie p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[14].owner} id="p14">
          {/*Targi Poznańskie*/}
          <div class="p-group-zombie p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[15].owner} id="p15">
          {/*Postój taksówek*/}
          <div class="p-group-bus p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[16].owner} id="p16">
          {/*Stare Zoo*/}
          <div class="p-group-zoo p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[17].owner} id="p17">
          {/*Szansa*/}
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[18].owner} id="p18">
          {/*Rynek Jezycki*/}
          <div class="p-group-zoo p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-top owner-' + this.state.fields[19].owner} id="p19">
          {/*Bałtyk Tower*/}
          <div class="p-group-zoo p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className="card-big top right" id="p20">
          {/*Okrąglak Punkt Widokowy*/}
          <div class="field-corner-border-right"></div>
        </div>
      </div>
    )
  }
};

export default TopFields;
