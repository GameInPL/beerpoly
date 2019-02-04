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
      <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[9].owner} id="p9">
        <div class="p-group-cross p-group">
        </div>
          <div className="label">{/*Cmentarz Junikowo*/}</div>
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[8].owner} id="p8">
        <div class="p-group-cross p-group"></div>
          <div className="label">{/*STadion Inea*/}</div>
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[7].owner} id="p7">
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[6].owner} id="p6">
        <div class="p-group-cross p-group"></div>
          <div className="label">{/*Pixel*/}</div>
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[5].owner} id="p5">
        <div class="p-group-bus p-group"></div>
          <div className="label">{/*Pętla Tranwajowwa Grunwalt*/}</div>
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[4].owner} id="p4">
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[3].owner} id="p3">
        <div class="p-group-cross p-group"></div>
          <div className="label">{/*Kino Biedronka */}</div>
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[2].owner} id="p2">
        </div>
        <div class="field-border"></div>
        <div className={'card-left owner-' + this.state.fields[1].owner} id="p1">
        <div class="p-group-airport p-group"></div>
          <div className="label">{/*Lotnisko Ławica*/}</div>
        </div>
      </div>
    )
  }
};

export default LeftFields;
