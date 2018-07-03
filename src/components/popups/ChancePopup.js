import React from 'react';

class ChancePopup extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chance-popup">
        <p>
          <b>{this.props.popup.state.title}</b>
        </p>
        <p>{this.props.popup.state.description}</p>
        <p onClick={this.okButton.bind(this)}>OK</p>
      </div>
    )
  }

  okButton() {
    let eventBus = this.props.gameState.eventBus;
    let popup = this.props.popup;
    eventBus.publish(popup.state.triggerEvent, popup);
    eventBus.publish('doClosePopup', popup);
  }
};

export default ChancePopup;
