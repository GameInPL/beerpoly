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
        <div className={'card-right owner-' + this.state.fields[21].owner} id="p21">
          {/*Filharmonia*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group"></div>
        </div>
        <div class="field-border"></div>
          {/*Wyzwanie*/}
          <div class="field-border"></div>
          <div className={'card-right owner-' + this.state.fields[22].owner} id="p22">
        </div>
        <div className={'card-right owner-' + this.state.fields[23].owner} id="p23">
          {/*Teatr Wielki*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group"></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[24].owner} id="p24">
          {/*Zamek Cesarski*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group"></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[25].owner} id="p25">
          {/*Dworzec Poznań Główny*/}
          <div class="field-border"></div>
          <div class="p-group-bus p-group"></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[26].owner} id="p26">
          {/*Hotel Bazar*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group" ></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[27].owner} id="p27">
          {/*Bibloteka Raczyńsich*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group"></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[28].owner} id="p28">
          {/*Aquanet*/}
          <div class="field-border"></div>
          <div class="p-group-energy p-group"></div>
        </div>
        <div className={'card-right owner-' + this.state.fields[29].owner} id="p29">
          {/*Fara*/}
          <div class="field-border"></div>
          <div class="p-group-oldtown p-group"></div>
        </div>
      </div>
    )
  }
};

export default RightFields;
