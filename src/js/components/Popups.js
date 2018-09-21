import React from 'react';
import ChancePopup from './popups/ChancePopup';
import ChallengePopup from './popups/ChallengePopup';
import BuyFieldConfirmPopup  from './popups/BuyFieldConfirmPopup';
import SwitchMovePopup  from './popups/SwitchMovePopup';
import TakeCardPopup  from './popups/TakeCardPopup';

class Popups extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.state = this.game.state.dump();
    this.game.eventBus.on('commit', this.commit.bind(this));
  }

  commit(state) {
    this.state = state;
    this.forceUpdate()
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
            <ChancePopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'challenge':
          popups.push(
            <div key={i} className="popup">
            {this.renderClose(popup, this.closePopup.bind(this, i))}
            <ChallengePopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'buyFieldConfirm':
          popups.push(
            <div key={i} className="popup">
            <BuyFieldConfirmPopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'switchMovePopup':
          popups.push(
            <div key={i} className="popup">
            <SwitchMovePopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'takeCardPopup':
          popups.push(
            <div key={i} className="popup">
            <TakeCardPopup game={this.game} popup={popup} />
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
    let popup = this.state.popups[index];
    return this.game.closePopup(popup).then(() => {
      return this.game.commit();
    });
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
