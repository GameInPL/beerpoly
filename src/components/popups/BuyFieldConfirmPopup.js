import React from 'react';

class BuyFieldConfirmPopup extends React.Component {

  constructor(props) {
    super(props);
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
    let gameState = this.props.gameState;
    let eventBus = gameState.eventBus;
    let popup = this.props.popup;
    let currentPlayer = gameState.getCurrentPlayer();
    let currentPlayerField = gameState.state.fields[currentPlayer.position];
    currentPlayerField.owner = currentPlayer.idNumber;
    gameState.save();
    eventBus.publish('doClosePopup', popup);
  }

  cancelButton() {
    let eventBus = this.props.gameState.eventBus;
    let popup = this.props.popup;
    eventBus.publish('doClosePopup', popup);
  }


};

export default  BuyFieldConfirmPopup;
