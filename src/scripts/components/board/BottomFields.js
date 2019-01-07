import React from 'react';

class BottomFields extends React.Component {

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
      <div className="bottom-box">
        <div className="card-big top left" id="p0">START</div>
        <div className={'card-bottom owner-' + this.state.fields[39].owner} id="p39">
          <div className="label">Stary Browar</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[38].owner} id="p38">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[37].owner} id="p37">
          <div className="label">Zakłady Cegielskiego</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[36].owner} id="p36">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[35].owner} id="p35">
          <div className="label">Dworzec Rnodo Śródki</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[34].owner} id="p34">
          <div className="label">31 Baza Lotnicza</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[33].owner} id="p33">
        </div>
        <div className={'card-bottom owner-' + this.state.fields[32].owner} id="p32">
          <div className="label">Galeria Posnania</div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[31].owner} id="p31">
          <div className="label">Kadedra</div>
        </div>
        <div className="card-big bottom right" id="p30">Idziesz do izby wytrzeźwień</div>
      </div>
    )
  }
};

export default BottomFields;
