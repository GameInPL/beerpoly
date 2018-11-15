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
        <div className="card-big top left" id="p0">START</div>
        <div className={'card-top owner-' + this.state.fields[1].owner} id="p1">
          <div className="label">Zakład Goplany</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[2].owner} id="p2">
        </div>
        <div className={'card-top owner-' + this.state.fields[3].owner} id="p3">
          <div className="label">Nowe zoo</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[4].owner} id="p4">
          <div className="label">Rynek jeżycki</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[5].owner} id="p5">
        </div>
        <div className={'card-top owner-' + this.state.fields[6].owner} id="p6">
          <div className="label">Bałtyk Tower</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[7].owner} id="p7">
          <div className="label">Stadion Miejski</div>
        </div>
        <div className={'card-top owner-' + this.state.fields[8].owner} id="p8">
        </div>
        <div className={'card-top owner-' + this.state.fields[9].owner} id="p9">
          <div className="label">Zakłady Hipolita</div>
        </div>
        <div className="card-big top right" id="p10">Izba wytrzeźwień</div>
      </div>
    )
  }
};

export default TopFields;
