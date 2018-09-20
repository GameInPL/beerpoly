import React from 'react';

class BottomFields extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = props.game.state.dump();
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(state) {
    this.state = state;
    this.forceUpdate()
  }

  render() {
    return (
      <div className="bottom-box">
        <div className="card-big bottom left" id="p30">Uniwersytet Ekonomiczny </div>
        <div className={'card-bottom owner-' + this.state.fields[29].owner} id="p29">
          <div className="label">Baza lotnicza</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[28].owner} id="p28">
          <div className="label">Malta</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[27].owner} id="p27">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[26].owner} id="p26">
          <div className="label">Stary browar</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[25].owner} id="p25">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[24].owner} id="p24">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[23].owner} id="p23">
          <div className="label">Filharmonia</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[22].owner} id="p22">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[21].owner} id="p21">
          <div className="label">Okrąglak</div>
        </div>
        <div className="card-big bottom right" id="p20">Idziesz do izby wytrzeźwień</div>
      </div>
    )
  }
};

export default BottomFields;
