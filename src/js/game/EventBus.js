export class EventBus {

  constructor(playerNumber) {
    this.slots = {};
  }

  on(eventName, cb) {
    let cbs = this.slots[eventName] || [];
    this.slots[eventName] = [...cbs, cb];
  }

  onAll(eventNames, cb) {
    for(let i=0; i<eventNames.length; i++) {
      this.on(eventNames[i], cb);
    }
  }

  publish(eventName, data) {
    let cbs = this.slots[eventName] || [];
    let promises = [];
    for(let i=0; i<cbs.length; i++) {
      promises.push(cbs[i](data));
    }
    return Promise.all(promises);
  }

  publishAll(eventNames, data) {
    let promises = [];
    for(let i=0; i<eventNames.length; i++) {
      promises.push(this.publish(eventNames[i], data));
    }
    return Promise.all(promises);
  }

}
