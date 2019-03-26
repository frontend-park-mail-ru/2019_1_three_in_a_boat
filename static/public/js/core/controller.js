'use strict';

import View from './view.js';

/**
 * @class Controller
 */
export default class Controller {
  /**
   * Construct base controller
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    this.view = new View(parent);
    this.events = [];
  }

  /**
   * Destruct object
   */
  destructor() {
    while (this.events.length) {
      const event = this.events.pop();
      event.item.removeEventListener(event.type, event.handler);
    }
  }

  /**
   * Do page actions
   */
  action() {}
}
