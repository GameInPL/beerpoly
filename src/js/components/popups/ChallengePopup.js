import React from 'react';

class ChallengePopup extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.popup = props.popup;
    this.eventBus = props.game.eventBus;
  }

  render() {
    return (
      <div className="challenge-popup">
        <p>
          <b>{this.popup.state.title}</b>
        </p>
        <p>{this.popup.state.description}</p>
        <p onClick={this.okButton.bind(this)}>OK</p>
      </div>
    )
  }

  okButton() {
    return this.eventBus.publish(this.popup.state.triggerEvent, this.popup).then(() => {
      return this.game.closePopup(this.popup);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default ChallengePopup;
