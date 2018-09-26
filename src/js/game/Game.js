import {FieldActions} from './actions/FieldActions';
import {CardActions} from './actions/CardActions';
import {GameActions} from './actions/GameActions';
import {EventBus} from './EventBus';
import {Cards} from './Cards';
import {Interface} from './Interface';
import {Players} from './Players';
import {Popups} from './Popups';
import {TheEnd} from './TheEnd';
import {State} from './state/State';

export class Game  {

  constructor(gameState) {
    this.state = new State();
    this.eventBus = new EventBus();
    this.cards = new Cards(this);
    this.interface = new Interface(this);
    this.players = new Players(this);
    this.popups = new Popups(this);
    this.theEnd = new TheEnd(this);
    this.actions = {
      fields: new FieldActions(this),
      cards: new CardActions(this),
      game: new GameActions(this)
    };
  }

  commit() {
    let dump = this.state.dump();
    return this.eventBus.publish('commit', dump);
  }

  nextTour() {
    return this.eventBus.publish('beforeNextTour', this.state).then(() => {
      this.state.tour++;
    }).then(() => {
      return this.eventBus.publish('afterNextTour', this.state)
    });
  }


}
