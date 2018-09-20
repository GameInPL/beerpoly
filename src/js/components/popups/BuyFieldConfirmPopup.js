import React from 'react';

class BuyFieldConfirmPopup extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.popup = props.popup;
    this.eventBus = props.game.eventBus;
  }

  render() {
    return (
      <div className="buy-field-confirm-popup">
        <p>
          <b>Czy chesz kupic pole {this.props.popup.state.field.name}?</b>
        </p>
        <div className="buttons">
          <div className="btn" onClick={this.buyButton.bind(this)}>Kup</div>
          <div className="btn" onClick={this.cancelButton.bind(this)}>Olej</div>
        </div>
      </div>
    )
  }

  buyButton() {
    let currentPlayer = this.game.getCurrentPlayer();
    let currentPlayerField = this.game.state.fields[currentPlayer.position];
    currentPlayerField.owner = currentPlayer.idNumber;
    return this.game.nextTour().then(() => {
      return this.game.closePopup(this.popup);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  cancelButton() {
    return this.game.closePopup(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

};

export default BuyFieldConfirmPopup;
