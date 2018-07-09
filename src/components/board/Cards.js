import React from 'react';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.state = {
      chances: this.gameState.state.chances,
      challenges: this.gameState.state.challenges
    }
  }

  chanceButton() {
    let randomCard = this.state.chances[Math.floor(Math.random()*this.state.chances.length)];
    this.gameState.eventBus.publish('doOpenPopup', {
      type: 'chance',
      state: randomCard,
    })
  }

  challengeButton() {
    let randomCard = this.state.challenges[Math.floor(Math.random()*this.state.challenges.length)];
    this.gameState.eventBus.publish('doOpenPopup', {
      type: 'challenge',
      state: randomCard,
    })
  }

  render() {
    return (
      <div className="cards">
        <div className="card_chance" onClick={this.chanceButton.bind(this)} >Karty szansy</div>
        <div className="card_challenge" onClick={this.challengeButton.bind(this)} >Karty wyzwania</div>
      </div>
    )
  }
};

export default Cards;
