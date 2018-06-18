import React from 'react';

class Dices extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.eventBus = props.gameState.eventBus;
    this.state = {
      dices: this.gameState.state.dices
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
      console.log('movePlayer getCurrentPlayer', value);
      //this.gameState.moveCurrentPlayer(value);
      //this.gameState.nextTour();
      //movePlayer(getCurrentPlayer(), value);
      this.eventBus.publish('doMoveCurrentPlayer', value);
      this.eventBus.publish('doNextTour');
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
      console.log('movePlayer getCurrentPlayer', value);
      //this.gameState.moveCurrentPlayer(value);
      //this.gameState.nextTour();
      //movePlayer(getCurrentPlayer(), value);
      this.eventBus.publish('doMoveCurrentPlayer', value);
      this.eventBus.publish('doNextTour');
    }
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
