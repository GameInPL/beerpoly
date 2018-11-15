
//pole
export class Field  {
  constructor(data) {
    let filedInvests;
    this.idNumber = data.idNumber; // identyfikator i pozycja pola
    this.name = data.name; // nazwa (wyświetlana)
    this.cost = data.cost || 200; // koszt zakupu
    this.owner = data.owner || null; // do kogo nalezy budynek
    this.action = data.action || 'DefaultFieldAction';
    this.investLvl = 0; //ilosc stopni inwestycji
    // invests
    filedInvests = data.filedInvests || [{}, {}, {}, {}];
    this.filedInvestCosts = [];
    for(let i=0; i<filedInvests.length; i++) {
      filedInvests[i].lvl = i;
      this.filedInvestCosts.push(new FiledInvestCost(filedInvests[i]))
    }
  }
}


// stopień inwestycji
export class FiledInvestCost {
  constructor(data) {
    this.lvl = data.lvl;
    this.cost = data.cost || 200; //ile kosztuje stopień inwestycji
    this.pay = data.pay || this.lvl * 2000 * 0.5 + 50; //ile gracz musi zpalci za wlezienie na pole
  }
}
