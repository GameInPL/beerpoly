import React from 'react';

class WinnerPopup extends React.Component {

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
          <b>Wygrałęs Rekinie Biznesu. Wszystkie loszki twoje i piwo też.</b>
        </p>
          <p>
            <b>Graczu{this.state.winner.idNumber} jesteś zwycięzcą.</b>
          </p>
        <div className="buttons">
          <div className="btn" onClick={this.okButton.bind(this)}>OK</div>
        </div>
      </div>
    )
  }

  okButton() {
    this.game.popups.close(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default WinnerPopup;
