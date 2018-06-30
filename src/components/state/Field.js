
export class Filed  {
//pole
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


export class FiledInvestCost {
//wycena wartosci pola
  constructor(idNumber) {
    this.money = money;
    this.Pay = 0; //ile gracz musi zpalci graczu ,licitacja
    this.idNumber = idNumber;

  }

}
