import React from 'react';

class BankruptPopup extends React.Component {

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
          <b>Bankructwo to nie koniec świata... ale na pewno koniec gry. Graczu{this.state.player.idNumber} rozluźnij się i strzel sobie piwko.</b>
        </p>
        <div className="buttons">
          <div className="btn" onClick={this.okButton.bind(this)}>OK</div>
        </div>
      </div>
    )
  }

  okButton() {
    return this.game.popups.close(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default BankruptPopup;
