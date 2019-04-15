'use strict';

/**
 * @class Controller
 */
export default class Controller {
  /**
   * Construct base controller
   * @param {HTMLElement} parent
   * @param {boolean} isRequiredOnline does this page require
   * internet connection
   */
  constructor(parent, isRequiredOnline) {
    this.parent = parent;
    this.isRequiredOnline = isRequiredOnline;
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
    this.parent.innerHTML = '';
  }

  /**
   * Do page actions
   */
  action() {}
}
