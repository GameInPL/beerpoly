import React from 'react';

class TakeCardPopup extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.popup = props.popup;
    this.state = this.props.popup.state;
    this.eventBus = props.game.eventBus;
  }

  render() {
    return (
      <div className="buy-field-confirm-popup">
        <p>
          <b>Czasem w życiu trzeba się zdecydować?</b>
        </p>
        <div className="buttons">
          <div className="btn" onClick={this.chanceButton.bind(this)}>Szansa</div>
          <div className="btn" onClick={this.challengeButton.bind(this)}>Wyzwanie</div>
        </div>
      </div>
    )
  }

  chanceButton(field) {
    return this.game.popups.close(this.popup).then(() => {
      return this.game.cards.takeRandomChance();
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  challengeButton(field) {
    return this.game.popups.close(this.popup).then(() => {
      return this.game.cards.takeRandomChallenge();
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default TakeCardPopup;
