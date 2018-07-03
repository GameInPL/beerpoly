
//pole
export class Field  {
  constructor(idNumber, name) {
    this.idNumber = idNumber;
    this.name = name;
    this.investLvl = 0; //ilosc possadanych budyów
    this.cost=0;
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
