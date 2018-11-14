import {Player} from './Player';
import {Chance} from './Chance';
import {Challenge} from './Challenge';
import {Field} from './Field';

export class DumpState  {

  constructor(playerNumber) {
    this.initData();
  }

  init(playerNumber) {
    this.initData();
    this.initPlayers(playerNumber);
    this.initFields();
    this.initChances();
    this.initChallenges();
  }

  initData(playerNumber) {
    this.tour = 0;
    this.dices = [];
    this.players = [];
    this.fields = [];
    this.chances = [];
    this.challenges = [];
    this.popups = [];
  }

  initPlayers(playerNumber) {
    playerNumber = playerNumber || 2;
    playerNumber = playerNumber<=6 ? playerNumber : 6;
    playerNumber = playerNumber<2 ? 2 : playerNumber;
    for(let i=0; i<playerNumber; i++) {
      this.players.push(new Player(i));
    }
  }

  initChances() {
    this.chances = [];
    this.chances.push(new Chance('Izba wytrzeźwień', 'Najebałeś się jak szpak. Idziesz do izby wytrzeźwień', 'goToPrisonCardAction'));
    this.chances.push(new Chance('Podstępne rogale', 'Świętując 11.11 chciałeś oszczędzić i kupiłeś tańszego rogala. Okazał się robaczywy, a Ty we wstydzie spędzasz kolejną turę, nie wykonując żadnego ruchu.', 'waitOneTourCardAction'));
    this.chances.push(new Chance('Te samochody', 'Utknąłeś w korku. Musisz cofnąć się na Stadion miejscki. ', 'goToTheCityStadiumCardAction'));
    this.chances.push(new Chance('Zdrowo, rowerowo... oszczędnie', 'W sezonie letnim zdecydowałeś się poruszać wyłącznie rowerem. Weź z banku 200zł, które zaoszczędziłeś.', 'take200ZLCardAction'));
    this.chances.push(new Chance('Hazard..', 'Poprawnie obstawiłeś wynik meczu. Otrzymaj 50zł.', 'take50ZLCardAction'));
    this.chances.push(new Chance('Te biblioteki', 'Nie oddałeś na czas książki do biblioteki Raczyńskich. Tracisz 100zł.', 'lose100ZLCardAction'));
    this.chances.push(new Chance('Te biblioteki', 'Nie oddałeś na czas książki do biblioteki Raczyńskich. Tracisz 100zł.', 'lose100ZLCardAction'));
    this.chances.push(new Chance('Szkieły', 'Szkieły znalezły Cię jak jakiegoś ochlapusa nad Wartą. Idziesz do więzienia.', 'goToPrisonCardAction'));
    this.chances.push(new Chance('Filharmonia', 'Spędziłeś uroczy wieczór w Filharmonii. Kulturą i ogładą przewyższasz swoich przeciwników. Tracą oni po 25zł na bilety, aby móc Cię dogonić.', 'otherPlayersLose25ZL'));
  }

  initChallenges() {
    this.challenges = [];
    // Zaśpiewaj
    this.challenges.push(new Challenge('Zaśpiewaj', 'Zaśpiewaj. Nie potrafisz? Nie przejmuj się. Twoi znajomi będą cierpieć straszne katusze. Nie wiesz co? odę do radości, kokok koko euro spoko, call me maybe lub coś własnego (jeśli jesteś już tak najebany, że nie pamiętasz żadnej piosenki).', 'nextTour'));
    // Wyśmiej
    this.challenges.push(new Challenge('Wyśmiej', 'Wyśmiej gracza na przeciwko Ciebie. Ma zabawne włosy/twarz a może zachowóje się dziwnie? ' +
    + 'Jak mawiał znany myśliciel "Powiedz no, czy to coś z przodu twojej głowy to twarz, czy dupa?"', 'nextTour'));
    this.challenges.push(new Challenge('Wyśmiej', 'Zaśmiej się szyderczo z następnego gracza.', 'nextTour'));
    // Piwo
    this.challenges.push(new Challenge('Piwo', 'Stawiasz piwo twórcom gry. Nie ma nas w pobliżu?? Pijesz sam. Nas to boli bardziej niż Ciebie.', 'nextTour'));
    //
    this.challenges.push(new Challenge('Voodoo', 'Do przejechania start trzymasz rękę na ramieniu gracza po prawej', 'nextTour'));
    // Inne
    this.challenges.push(new Challenge('Cytat', 'Powiedz ulubiony cytat. Nie masz? Wymyśl.', 'nextTour'));
  }

  initFields() {
    this.fields = [];
    this.addField({
      name: 'Start'
    });
    this.addField({
      name: 'Zakład Goplany'
    });
    this.addField({
      name: 'Wyzwanie',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Nowe zoo'
    });
    this.addField({
      name: 'Rynek jeżycki'
    });
    this.addField({
      name: 'Ciuchcia'
    });
    this.addField({
      name: 'Bałtyk Tower'
    });
    this.addField({
      name: 'Stadion Miejski'
    });
    this.addField({
      name: 'Ścieki'
    });
    this.addField({
      name: 'Zakłady Hipolita'
    });
    this.addField({
      name: 'Izba wytrzeźwień',
      action: 'SkipAction'
    });
    this.addField({
      name: 'Port Ławica'
    });
    this.addField({
      name: 'Rynek łazarski'
    });
    this.addField({
      name: 'Wyzwanie',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Park Wilsona'
    });
    this.addField({
      name: 'Cuchcia'
    });
    this.addField({
      name: 'Zagadka',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Pixel'
    });
    this.addField({
      name: 'Lux'
    });
    this.addField({
      name: 'Blioteka raczyńskich'
    });
    this.addField({
      name: 'Idziesz do izby wytrzeźwień'
    });
    this.addField({
      name: 'Okrąglak'
    });
    this.addField({
      name: 'Wyzwanie',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Filharmonia'
    });
    this.addField({
      name: 'Zus',
      action: 'TaxAction'
    });
    this.addField({
      name: 'Ciuchcia'
    });
    this.addField({
      name: 'Stary browar'
    });
    this.addField({
      name: 'Zagadka',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Malta'
    });
    this.addField({
      name: 'Baza lotnicza'
    });
    this.addField({
      name: 'Uniwersytet Ekonomiczny'
    });
    this.addField({
      name: 'SPOT'
    });
    this.addField({
      name: 'Elektrownia'
    });
    this.addField({
      name: 'Aquanet'
    });
    this.addField({
      name: 'Kino'
    });
    this.addField({
      name: 'Ciuchcia'
    });
    this.addField({
      name: 'Palmiarnia'
    });
    this.addField({
      name: 'Wyzwania',
      action: 'TakeCardAction'
    });
    this.addField({
      name: 'Teatr nowy'
    });
    this.addField({
      name: 'Stare Zoo'
    });
  }

  addField(data) {
    data.idNumber = this.fields.length;
    this.fields.push(new Field(data));
  }

  dump() {
    return JSON.parse(JSON.stringify({
      tour: this.tour,
      dices: this.dices,
      fields: this.fields,
      players: this.players,
      chances: this.chances,
      challenges: this.challenges,
      popups: this.popups
    }));
  }

}
