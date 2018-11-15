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
        <div className={'card-right owner-' + this.state.fields[11].owner} id="p11">
          <div className="label">Port Ławica</div>
        </div>
        <div className={'card-right owner-' + this.state.fields[12].owner} id="p12">
          <div className="label">Rynek łazarski</div>
        </div>
        <div className={'card-right owner-' + this.state.fields[13].owner} id="p13">
        </div>
        <div className={'card-right owner-' + this.state.fields[14].owner} id="p14">
          <div className="label">Park Wilsona</div>
        </div>
        <div className={'card-right owner-' + this.state.fields[15].owner} id="p15">
        </div>
        <div className={'card-right owner-' + this.state.fields[16].owner} id="p16">
        </div>
        <div className={'card-right owner-' + this.state.fields[17].owner} id="p17">
          <div className="label">Pixel</div>
        </div>
        <div className={'card-right owner-' + this.state.fields[18].owner} id="p18">
        </div>
        <div className={'card-right owner-' + this.state.fields[19].owner} id="p19">
          <div className="label">Biblioteka raczyńskich</div>
        </div>
      </div>
    )
  }
};

export default RightFields;
