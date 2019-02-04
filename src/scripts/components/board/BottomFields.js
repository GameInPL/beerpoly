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
        <div className="card-big top left" id="p0">
          {/*START*/}
          <div class="field-corner-border-right"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[39].owner} id="p39">
          {/*Stary Browar*/}
          <div class="p-group-wilda p-group"></div>
          <div class="field-border"></div>
          <div className="label"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[38].owner} id="p38">
          {/*Inflacja*/}
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[37].owner} id="p37">
          {/*Zakłady Cegielskiego*/}
          <div class="p-group-wilda p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[36].owner} id="p36">
          {/*Wyzwanie*/}
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[35].owner} id="p35">
          {/*Dworzec Rnodo Śródki*/}
          <div class="p-group-bus p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[34].owner} id="p34">
          {/*31 Baza Lotnicza*/}
          <div class="p-group-newtown p-group"></div>
          <div class="field-border"></div>
          <div className="label"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[33].owner} id="p33">
          {/*Szansa*/}
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[32].owner} id="p32">
          {/*Galeria Posnania*/}
          <div class="p-group-newtown p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className={'card-bottom owner-' + this.state.fields[31].owner} id="p31">
          {/*Kadedra*/}
          <div class="p-group-newtown p-group"></div>
          <div class="field-border"></div>
        </div>
        <div className="card-big bottom right" id="p30">
          {/*Idziesz do izby wytrzeźwień*/}
          <div class="field-corner-border-right"></div>
        </div>
      </div>
    )
  }
};

export default BottomFields;
