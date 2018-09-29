import React from 'react';

class ConfirmChallenge extends React.Component {

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
          <b>Wykonał Zadanie?</b>
        </p>
        <div className="buttons">
          <div className="btn" onClick={this.yesButton.bind(this)}>Tak</div>
          <div className="btn" onClick={this.noButton.bind(this)}>Nie</div>
        </div>
      </div>
    )
  }

  okButton() {
    let state = this.game.state;
    for(let i=0; i<state.fields.length; i++) {
      state.fields[i].owner = null;
    }
    return this.game.popups.close(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  yesButton() {
    return this.game.popups.close(this.popup).then(() => {
      return this.eventBus.publish(this.state.yesAction);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  noButton() {
    return this.game.popups.close(this.popup).then(() => {
      return this.eventBus.publish(this.state.noAction);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default ConfirmChallenge;
