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
        <div className="card-big top left" id="p10">Izba wytrzeźwień</div>
        <div className={'card-top owner-' + this.state.fields[11].owner} id="p11">
          <div className="label">Palmiarnia</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[12].owner} id="p12">
          <div className="label">Elektrociepłownia Veolia</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[13].owner} id="p13">
          <div className="label">Rynek Łazarski</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[14].owner} id="p14">
          <div className="label">Targi Poznańskie</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[15].owner} id="p15">
          <div className="label">Postój taksówek</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[16].owner} id="p16">
          <div className="label">Stare Zoor</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[17].owner} id="p17">
        </div>
        <div className={'card-top owner-' + this.state.fields[18].owner} id="p18">
          <div className="label">Rynek Jezycki</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[19].owner} id="p19">
          <div className="label">Bałtyk Tower</div>
        </div>
        <div className="card-big top right" id="p20">Okrąglak Punkt Widokowy</div>
      </div>
    )
  }
};

export default TopFields;
