import React from 'react';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.state = {
      chances: this.gameState.state.chances
    }
  }

  chanceButton() {
    // get random card
    let randomCard = this.state.chances[Math.floor(Math.random()*this.state.chances.length)];
    this.gameState.eventBus.publish('doOpenPopup', {
      type: 'chance',
      state: randomCard,
    })
  }

  challengeButton() {
    //TODO: @INU Do it ;-)
  }

  render() {
    return (
      <div className="cards">
        <div className="card chance" onClick={this.chanceButton.bind(this)} >Karty szansy</div>
        <div className="card challenge" onClick={this.challengeButton.bind(this)} >Karty wyzwania</div>
      </div>
    )
  }
};

export default Cards;
