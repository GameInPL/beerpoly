import React from 'react';

class Dices extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.eventBus = props.game.eventBus;
    this.state = {
      dices: this.game.state.dices
    }
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(state) {
    this.state = state;
    this.forceUpdate()
  }

  randomRoll() {
    return Math.floor(Math.random() * 6 + 1);
  }

  nextTour() {
    let player = this.game.getCurrentPlayer();
    player.waitCounter--;
    return this.game.nextTour().then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  rollOfDices() {
    this.state.dices = this.game.state.dices = [
      this.randomRoll(),
      this.randomRoll()
    ];
    return this.game.lockInterface().then(() => {
      return this.animDices(this.state).then(() => {
        let value = this.state.dices[0] + this.state.dices[1];
        if (value == 12) {
          //jeśli wykulamy 6 + 6 rzucamy jeszcze raz
          return this.secondRollOfDices(value);
        } else {
          // idziemy (value) pól do przozdu
          console.log('wylosowano', value);
          return this.move(value);
        }
      });
    });
  }

  secondRollOfDices(value) {
    this.state.dices = this.game.state.dices = [
      this.randomRoll(),
      this.randomRoll()
    ];
    return this.animDices(this.state).then(() => {
      value += this.state.dices[0] + this.state.dices[1];
      //jeśli wykulamy 6 + 6 drugi raz, idziemy do więzienia
      if (value == 24) {
        //idziesz do więzienia
        alert('go to prison');
        let player = this.game.getCurrentPlayer();
        return this.game.movePlayerTo(prisonNumber);
      } else {
        // idziemy (value) pól do przozdu
        console.log('wylosowano', value);
        return this.move(value);
      }
    });
  }

  move(value) {
    let player = this.game.getCurrentPlayer();
    return this.game.lockInterface().then(() => {
      this.game.playerMoveAbout(player, value)
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    }).then(() => {
      return this.game.unlockInterface();
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
        {this.renderGoButton()}
        <div id="cube-box">{dices}</div>
      </div>
    )
  }

  renderGoButton() {
    let currentPlayer = this.game.getCurrentPlayer();
    if (currentPlayer.waitCounter>0) {
      return (
        <button id="rollOfDicesButton" onClick={this.nextTour.bind(this)}>Gracz{currentPlayer.idNumber+1} czekasz {currentPlayer.waitCounter} kolejki</button>
      )
    } else {
      return (
        <button id="rollOfDicesButton" onClick={this.rollOfDices.bind(this)}>Losuj</button>
      )
    }
  }

  animDices(state) {
    let dicesWrap = document.getElementById('cube-box');
    dicesWrap.innerHTML = `<div id="cube0">${state.dices[0]}</div><div id="cube1">${state.dices[1]}</div>`;
    return this.wait(3000);
  }

  wait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, time)
    });
  }
};

export default Dices;
