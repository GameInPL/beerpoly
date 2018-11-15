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
        <div className={'card-left owner-' + this.state.fields[39].owner} id="p39">
          <div className="label">Stare Zoo</div>
        </div>
        <div className={'card-left owner-' + this.state.fields[38].owner} id="p38">
          <div className="label">Teatr nowy</div>
        </div>
        <div className={'card-left owner-' + this.state.fields[37].owner} id="p37">
        </div>
        <div className={'card-left owner-' + this.state.fields[36].owner} id="p36">
          <div className="label">Palmiarnia</div>
        </div>
        <div className={'card-left owner-' + this.state.fields[35].owner} id="p35">
        </div>
        <div className={'card-left owner-' + this.state.fields[34].owner} id="p34">
          <div className="label">Kino</div>
        </div>
        <div className={'card-left owner-' + this.state.fields[33].owner} id="p33">
          <div className="label">Aquanet</div>
        </div>
        <div className={'card-left owner-' + this.state.fields[32].owner} id="p32">
        </div>
        <div className={'card-left owner-' + this.state.fields[31].owner} id="p31">
          <div className="label">SPOT</div>
        </div>
      </div>
    )
  }
};

export default LeftFields;
