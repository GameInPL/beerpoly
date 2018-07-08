import {Player} from './Player';
import {Chance} from './Chance';
import {Challenge} from './Challenge';
import {Field} from './Field';
export class DumpState  {

  constructor(playerNumber) {
    this.tour = 0;
    this.dices = [];
    this.players = [];
    this.fields = [];
    this.chances = [];
    this.challenges = [];
    this.popups = [];
  }

  init(playerNumber) {
    this.initPlayers(playerNumber);
    this.initFields();
    this.initChances();
    this.initChallenges();
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
    this.chances.push(new Chance('chance1', 'chance1 description', 'eventAfterChance1'));
    this.chances.push(new Chance('chance2', 'chance2 description', 'eventAfterChance2'));
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
    this.fields.push(new Field(0, "Start"));
    this.fields.push(new Field(1, "Zakład Goplany"));
    this.fields.push(new Field(2, "Wyzwanie"));
    this.fields.push(new Field(3, "Nowe zoo"));
    this.fields.push(new Field(4, "Rynek jeżycki"));
    this.fields.push(new Field(5, "Ciuchcia"));
    this.fields.push(new Field(6, "Bałtyk Tower"));
    this.fields.push(new Field(7, "Stadion Miejski"));
    this.fields.push(new Field(8, "??Ścieki"));
    this.fields.push(new Field(9, "Zakłady Hipolita"));
    this.fields.push(new Field(10, "Izba wytrzeźwień"));
    this.fields.push(new Field(11, "Port Ławica"));
    this.fields.push(new Field(12, "Rynek łazarski"));
    this.fields.push(new Field(13, "Wyzwanie"));
    this.fields.push(new Field(14, "Park Wilsona"));
    this.fields.push(new Field(15, "Cuchcia"));
    this.fields.push(new Field(16, "Zagadka"));
    this.fields.push(new Field(17, "Pixel"));
    this.fields.push(new Field(18, "Lux"));//klub nocby z lucyfera
    this.fields.push(new Field(19, "iblioteka raczyńskich"));
    this.fields.push(new Field(20, "Idziesz do izby wytrzeźwień"));
    this.fields.push(new Field(21, "Okrąglak"));
    this.fields.push(new Field(22, "Wyzwanie"));
    this.fields.push(new Field(23, "Filharmonia"));
    this.fields.push(new Field(24, "Zus"));
    this.fields.push(new Field(25, "Ciuchcia"));
    this.fields.push(new Field(26, "Stary browar"));
    this.fields.push(new Field(27, "Zagadka"));
    this.fields.push(new Field(28, "Malta"));
    this.fields.push(new Field(29, "Baza lotnicza"));
    this.fields.push(new Field(30, "Uniwersytet Ekonomiczny"));
    this.fields.push(new Field(31, "SPOT"));
    this.fields.push(new Field(32, "Elektrownia"));
    this.fields.push(new Field(33, "Aquanet"));
    this.fields.push(new Field(34, "Kino"));
    this.fields.push(new Field(35, "Ciuchcia"));
    this.fields.push(new Field(36, "Palmiarnia"));
    this.fields.push(new Field(37, "Wyzwania"));
    this.fields.push(new Field(38, "Teatr nowy"));
    this.fields.push(new Field(39, "Stare Zoo"));
  }

  getPersistState() {
    return {
      tour: this.tour,
      dices: this.dices,
      players: this.players,
      popups: this.popups
    }
  }

  initPersistState(state) {
    this.tour = state.tour;
    this.dices = state.dices;
    this.players = state.players;
    this.popups = state.popups;
    this.initFields();
    this.initChances()
    this.initChallenges();
  }
}
