'use strict';

import Controller from '../core/controller.js';
import ChatView from '../views/chat-view.js';

/**
 * @class ChatController
 */
export default class ChatController extends Controller {
  /**
   * Construct obj ChatController
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new ChatView(parent);
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
  }
};
