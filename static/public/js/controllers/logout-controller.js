'use strict';
import Controller from '../core/controller.js';
import UserService from '../models/user-service.js';
import MenuView from '../views/menu-view.js';

/**
 * @class LogoutController
 */
export default class LogoutController extends Controller {
  /**
   * Create Logout Controller object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new MenuView(parent);
    this.events = [];
  }

  /**
   * realize page logic
   */
  action() {
    UserService.singout()
        .then(() => {
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        });
  }
};
