import React from 'react';

class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = this.game.state.dump();
  }

  chanceButton() {
    let randomCard = this.state.chances[Math.floor(Math.random()*this.state.chances.length)];
    this.game.openPopup({
      type: 'chance',
      state: randomCard,
    }).then(() => {
      return this.game.commit();
    });
  }

  challengeButton() {
    let randomCard = this.state.challenges[Math.floor(Math.random()*this.state.challenges.length)];
    this.game.openPopup({
      type: 'challenge',
      state: randomCard,
    }).then(() => {
      return this.game.commit();
    });
  }

  render() {
    return (
      <div className="cards">
        <div className="card_chance" onClick={this.chanceButton.bind(this)}>Karty szansy</div>
        <div className="card_challenge" onClick={this.challengeButton.bind(this)}>Karty wyzwania</div>
      </div>
    )
  }
};

export default Cards;
