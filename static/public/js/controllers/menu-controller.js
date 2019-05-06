'use strict';

import Controller from '../core/controller.js';
import MenuView from '../views/menu-view.js';
import UserService from '../models/user-service.js';
import showChatButton from '../views/components/chat-button.js';

/**
 * @class MenuController
 */
export default class MenuController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, false);
    this.user = null;
    this.view = new MenuView(parent);
  }
  /**
   * Create action
   */
  action() {
    UserService.getData().then(
        (user) => {
          this.user = user;
          this.view.render(this.user);
          showChatButton(this.parent);
        },
        (error) => {
          console.log(error);
        }
    );
  }
};
