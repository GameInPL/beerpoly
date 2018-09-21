
//pole
export class Field  {
  constructor(data) {
    this.idNumber = data.idNumber; // identyfikator i pozycja pola
    this.name = data.name; // nazwa (wyświetlana)
    this.cost = data.cost || 200; // koszt zakupu
    this.owner = data.owner || null; // do kogo nalezy budynek
    this.action = data.action || 'DefaultFieldAction';
    this.investLvl = 0; //ilosc stopni inwestycji
    this.filedInvestCosts = [
      new FiledInvestCost(),
      new FiledInvestCost(),
      new FiledInvestCost(),
      new FiledInvestCost()
    ];
  }

}


//koszt stopnia inwestycji
export class FiledInvestCost {
  constructor(idNumber) {
    this.idNumber = idNumber;
    this.money = 0;
    this.Pay = 0; //ile gracz musi zpalci graczu ,licitacja
  }
}
