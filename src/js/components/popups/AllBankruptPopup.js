import React from 'react';

class AllBankruptPopup extends React.Component {

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
          <b>Wszyscy zbankrutowaliście. Nawet małpa grająca z zawiązanymi oczami dała by radę... W przyszłosci inwestujcie lepiej.</b>
        </p>
        <div className="buttons">
          <div className="btn" onClick={this.okButton.bind(this)}>OK</div>
        </div>
      </div>
    )
  }

  okButton() {
    let state = this.game.state;
    for(let i=0; i<state.fields.length; i++) {
      state.fields[i].owner = null;
    }
    return this.game.popups.close(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default AllBankruptPopup;
