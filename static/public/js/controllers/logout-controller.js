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
    super(parent);
    this.view = new MenuView(parent);
    this.events = [];
  }

  /**
   * realize page logic
   */
  action() {
    const form = {id: undefined};
    UserService.sendData(form, undefined)
        .then(() => {
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        });
  }
};
