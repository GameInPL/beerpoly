import React from 'react';
import ChancePopup from './popups/ChancePopup';
import ChallengePopup from './popups/ChallengePopup';
import BuyFieldConfirmPopup  from './popups/BuyFieldConfirmPopup';

class Popups extends React.Component {

  constructor(props) {
    super(props);
    this.gameState = props.gameState;
    this.gameState.eventBus.on('changedPopups', this.updateState.bind(this))
    this.state = {
      popups: props.gameState.state.popups
    }
  }

  updateState() {
    this.setState({
      popups: this.gameState.state.popups
    });
  }

  render() {
    if(this.state.popups.length===0) {
      return null;
    }
    var popups = [];
    for (let i = 0; i < this.state.popups.length; i++) {
      var popup = this.state.popups[i];
      switch (popup.type) {
        case 'chance':
          popups.push(
            <div key={i} className="popup">
            {this.renderClose(popup, this.closePopup.bind(this, i))}
            <ChancePopup gameState={this.gameState} popup={popup} />
            </div>
          );
          break;
        case 'challenge':
          popups.push(
            <div key={i} className="popup">
            {this.renderClose(popup, this.closePopup.bind(this, i))}
            <ChallengePopup gameState={this.gameState} popup={popup} />
            </div>
          );
          break;
        case 'buyFieldConfirm':
          popups.push(
            <div key={i} className="popup">
            {this.renderClose(popup, this.closePopup.bind(this, i))}
            <BuyFieldConfirmPopup gameState={this.gameState} popup={popup} />
            </div>
          );
          break;
        default:
          throw 'Unknow popup type ${popup.type}';
      }
    }
    return (
      <div className="popups">
        <div className="mask"></div>
        {popups}
      </div>
    )
  }

  closePopup(index) {
    let closedPopups, popups;
    closedPopups = this.state.popups[index];
    this.gameState.eventBus.publish('doClosePopup', closedPopups);
  }

  renderClose(popup, onCloseBtn) {
    return (
      <div className="close-btn" onClick={onCloseBtn}>
        Close
      </div>
    )
  }
}

export default Popups;
