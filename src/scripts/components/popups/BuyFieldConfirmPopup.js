import React from 'react';

class BuyFieldConfirmPopup extends React.Component {

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
          <b>Czy chesz kupic pole {this.state.field.name} ({this.state.field.cost}zł)?</b>
        </p>
        <div className="buttons">
          {this.renderBuyButton()}
          <div className="btn" onClick={this.cancelButton.bind(this)}>Olej</div>
        </div>
      </div>
    )
  }

  renderBuyButton() {
    let currentPlayer = this.game.players.getCurrentPlayer();
    if(currentPlayer.money>=this.state.field.cost) {
      return (
        <div className="btn" onClick={this.buyButton.bind(this)}>Kup</div>
      )
    } else {
      return (
        <div className="btn disabled">Nie stać Cię</div>
      )
    }
  }

  buyButton() {
    let currentPlayer = this.game.players.getCurrentPlayer();
    let currentPlayerField = this.game.state.fields[currentPlayer.position];
    currentPlayerField.owner = currentPlayer.idNumber;
    currentPlayer.money -= currentPlayerField.cost;
    return this.game.nextTour().then(() => {
      return this.game.popups.close(this.popup);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

  cancelButton() {
    return this.game.nextTour().then(() => {
      return this.game.popups.close(this.popup);
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }

};

export default BuyFieldConfirmPopup;
