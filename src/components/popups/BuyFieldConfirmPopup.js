import React from 'react';

class  BuyFieldConfirmPopup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="buy-field-confirm-popup">
        <p>
          <b>Czy chesz kupic pole {this.props.popup.state.field.name}?</b>
        </p>
        <p onClick={this.buyButton.bind(this)}>Kup</p>
        <p onClick={this.cancelButton.bind(this)}>Olej</p>
      </div>
    )
  }

  buyButton() {
    let eventBus = this.props.gameState.eventBus;
    let popup = this.props.popup;
    //  eventBus.publish(popup.state.triggerEvent, popup);
     eventBus.publish('doClosePopup', popup);
  }

  cancelButton() {
    let eventBus = this.props.gameState.eventBus;
    let popup = this.props.popup;
    eventBus.publish('doClosePopup', popup);
  }


};

export default  BuyFieldConfirmPopup;
