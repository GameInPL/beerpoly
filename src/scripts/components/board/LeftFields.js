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
        <div className={'card-left owner-' + this.state.fields[9].owner} id="p9">
          {/*Cmentarz Junikowo*/}
          <div class="field-border"></div>
          <div class="p-group-cross p-group"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[8].owner} id="p8">
          {/*Stadion Inea*/}
          <div class="field-border"></div>
          <div class="p-group-cross p-group"></div>
          <div className="label"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[7].owner} id="p7">
          {/*Wyzwanie*/}
          <div class="field-border"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[6].owner} id="p6">
          {/*Pixel*/}
          <div class="field-border"></div>
          <div class="p-group-cross p-group"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[5].owner} id="p5">
          {/*Pętla Tranwajowwa Grunwalt*/}
          <div class="field-border"></div>
          <div class="p-group-bus p-group"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[4].owner} id="p4">
          {/*Podatek */}
          <div class="field-border"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[3].owner} id="p3">
          {/*Kino Biedronka */}
          <div class="field-border"></div>
          <div class="p-group-cross p-group"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[2].owner} id="p2">
          {/*Szansa */}
          <div class="field-border"></div>
        </div>
        <div className={'card-left owner-' + this.state.fields[1].owner} id="p1">
          {/*Lotnisko Ławica*/}
          <div class="field-border"></div>
          <div class="p-group-airport p-group"></div>
        </div>
      </div>
    )
  }
};

export default LeftFields;
