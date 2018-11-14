import React from 'react';

class SwitchMovePopup extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.popup = props.popup;
    this.state = this.props.popup.state;
    this.eventBus = props.game.eventBus;
  }

  render() {
    let list = [];
    for(let i=0; i<this.state.fields.length; i++) {
      list.push(
        <div className="btn" onClick={this.selectButton.bind(this, this.state.fields[i])}>{this.state.fields[i].name}</div>
      )
    }
    return (
      <div className="buy-field-confirm-popup">
        <p>
          {this.renderSteps()}
          <b>Gdzie chcesz się udać?</b>
        </p>
        <div className="buttons">{list}</div>
      </div>
    )
  }

  renderSteps() {
    if(!this.state.steps) return null;
    return (
      <span>Przesuwasz się o {this.state.steps} pól.</span>
    )
  }

  selectButton(field) {
    this.game.popups.close(this.popup)
    .then(() => {
      return this.game.interface.lock();
    })
    .then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.players.goTo(this.state.player, field.idNumber)
    }).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    }).then(() => {
      return this.game.interface.unlock();
    });
  }
};

export default SwitchMovePopup;
