import React from 'react';
import ChancePopup from './popups/ChancePopup';
import ChallengePopup from './popups/ChallengePopup';
import BuyFieldConfirmPopup  from './popups/BuyFieldConfirmPopup';
import SwitchMovePopup  from './popups/SwitchMovePopup';
import TakeCardPopup  from './popups/TakeCardPopup';
import BankruptPopup  from './popups/BankruptPopup';
import WinnerPopup  from './popups/WinnerPopup';
import AllBankruptPopup  from './popups/AllBankruptPopup';

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
            <ChancePopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'challenge':
          popups.push(
            <div key={i} className="popup">
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
        case 'bankruptPopup':
          popups.push(
            <div key={i} className="popup">
            <BankruptPopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'allBankruptPopup':
          popups.push(
            <div key={i} className="popup">
            <AllBankruptPopup game={this.game} popup={popup} />
            </div>
          );
          break;
        case 'winnerPopup':
          popups.push(
            <div key={i} className="popup">
            {this.renderClose(popup, this.game.popups.close.bind(this, i))}
            <WinnerPopup game={this.game} popup={popup} />
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
    return this.game.popups.close(popup).then(() => {
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
