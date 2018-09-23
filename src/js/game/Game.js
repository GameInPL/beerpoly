import {FieldActions} from './actions/FieldActions';
import {CardActions} from './actions/CardActions';
import {EventBus} from './EventBus';
import {State} from './state/State';

export class Game  {

  constructor(gameState) {
    this.state = new State();
    this.eventBus = new EventBus();
    this.actions = {
      fields: new FieldActions(this),
      cards: new CardActions(this)
    };
  }

  commit() {
    let dump = this.state.dump();
    return this.eventBus.publish('commit', dump);
  }

  movePlayer(player, steps) {
    return this.movePlayerTo(player, player.position + steps);
  }

  movePlayerTo(player, position) {
    return this.eventBus.publishAll(['beforeMovePlayer'], player).then(() => {
      player.position = position;
      player.position = player.position % this.state.fields.length;
      this.state.players[player.idNumber].position = player.position;
      return this.eventBus.publishAll(['afterMovePlayer'], player);
    });
  }

  playerGoTo(player, position) {
    return this.movePlayerTo(player, position).then(() => {
      return this.commit();
    }).then(() => {
      return this.triggerPlayerField(player);
    }).then(() => {
      return this.commit();
    });
  }

  playerMoveAbout(player, steps) {
    let firstPosition = (player.position - steps) % this.state.fields.length;
    firstPosition = firstPosition < 0 ? this.state.fields.length + firstPosition : firstPosition;
    let secondPosition = (player.position + steps) % this.state.fields.length;
    secondPosition = secondPosition < 0 ? this.state.fields.length + secondPosition : secondPosition;
    return this.openPopup({
      type: 'switchMovePopup',
      state: {
        player: player,
        steps: steps,
        fields: [
          this.state.fields[firstPosition],
          this.state.fields[secondPosition],
        ]
      }
    });
  }

  triggerPlayerField(player) {
    let field = this.state.fields[player.position];
    return this.eventBus.publish(field.action, {
      player: player,
      field: field,
      state: this.state.dump()
    })
  }

  nextTour() {
    return this.eventBus.publish('beforeNextTour', this.state).then(() => {
      this.state.tour++;
    }).then(() => {
      return this.eventBus.publish('afterNextTour', this.state)
    });
  }

  openPopup(popup) {
    popup.id = Math.random();
    return this.eventBus.publish('beforeOpenPopup', this.state).then(() => {
      this.state.popups.push(popup);
    }).then(() => {
      return this.eventBus.publishAll(['afterOpenPopup', 'changedPopups'], this.state)
    });
  }

  closePopup(popup) {
    return this.eventBus.publish('beforeClosePopup', this.state).then(() => {
      this.state.popups = this.state.popups.filter((p, ii) => p.id !== popup.id);
    }).then(() => {
      return this.eventBus.publishAll(['afterClosePopup', 'changedPopups'], this.state)
    });
  }

  takeRandomChance() {
    let randomCard = this.state.chances[Math.floor(Math.random()*this.state.chances.length)];
    return this.openPopup({
      type: 'chance',
      state: randomCard,
    });
  }

  takeRandomChallenge() {
    let randomCard = this.state.challenges[Math.floor(Math.random()*this.state.challenges.length)];
    return this.openPopup({
      type: 'challenge',
      state: randomCard,
    });
  }

  lockInterface() {
    return this.eventBus.publish('lockInterface');
  }

  unlockInterface() {
    return this.eventBus.publish('unlockInterface');
  }

  getCurrentPlayer() {
    return this.state.players[this.state.tour % this.state.players.length];
  }

}
