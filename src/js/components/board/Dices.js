import React from 'react';

class Dices extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.eventBus = props.game.eventBus;
    this.state = {
      dices: this.game.state.dices
    }
  }

  randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
  }

  rollOfDices() {
    let newState = {
      dices: [this.randomRoll(),this.randomRoll()]
    }
    this.setState(newState);
    let value = newState.dices[0] + newState.dices[1];
    //jeśli wykulamy 6 + 6 rzucamy jeszcze raz
    if (value == 12) {
      // czekamy 3s i rzucamy jeszcze raz
      setTimeout(this.secondRollOfDices.bind(this, value), 3000);
    } else {
      // idziemy value pól do przozdu
      // TODO: ...
      console.log('wylosowano', value);
      return this.move(value);
    }
    //roundNumber++;
  }

  secondRollOfDices(value) {
    let newState = {
      dices: [this.randomRoll(),this.randomRoll()]
    }
    this.setState(newState);
    value += newState.dices[0] + newState.dices[1];
    //jeśli wykulamy 6 + 6 drugi raz, idziemy do więzienia
    if (value == 24) {
      //idziesz do więzienia
      alert('go to prison');
      movePlayer1To(prisonNumber);
    } else {
      // idziemy value pól do przozdu
      // TODO: ...
      console.log('wylosowano', value);
      return this.move(value);
    }
  }

  move(value) {
    return this.game.moveCurrentPlayer(value).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  render() {
    let dices = [];
    for(let i=0; i<this.state.dices.length; i++) {
      let params = {
        id: 'cube' + i
      }
      dices.push(<div {...params}>{this.state.dices[i]}</div>)
    }
    return (
      <div className="dices">
        <button id="rollOfDicesButton" onClick={this.rollOfDices.bind(this)}>Losuj</button>
        <div id="cube-box">{dices}</div>
      </div>
    )
  }
};

export default Dices;
