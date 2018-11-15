import React from 'react';

class InvestPopup extends React.Component {

  constructor(props) {
    super(props);
    this.game = props.game;
    this.popup = props.popup;
    this.state = this.props.popup.state;
    this.eventBus = props.game.eventBus;
  }

  render() {
    let cards = [];
    for(let i=0; i<this.game.state.fields.length; i++) {
      let field = this.game.state.fields;
      if(field.owner === this.state.player.idNumber) {
        cards.push(this.renderCard(field));
      }
    }
    return (
      <ul>{cards}</ul>
    )
  }

  renderCard(field) {
    let invests = [];
    for(let i=0; i<field.filedInvestCosts.length; i++) {
      let invest = field.filedInvestCosts[i];
      invests.push(this.renderInvestLvl(i, invest, i<field.investLvl));
    }
    return (
      <li className="card">
        <strong className="name">{field.name}</strong>
        <div className="cost">{field.cost}</div>
        <ul className="invests">{invests}</ul>
        <div className="btn">Zastaw ({field.cost/4})</div>
        <div className="btn">Sprzedaj ({field.cost/2})</div>
      </li>
    )
  }

  renderInvestLvl(lvl, investLvl, buyed) {
    return (
      <li className="{buyed ? 'buyed' : ''}">
        <div className="lvl">{lvl}</div>
        <div className="cost">{investLvl.cost}</div>
        <div className="pay">{investLvl.pay}</div>
      </li>
    )
  }

  okButton() {
    this.game.popups.close(this.popup).then(() => {
      return this.game.commit();
    }).then(() => {
      return this.game.state.save();
    });
  }
};

export default InvestPopup;
