'use strict';
import Controller from '../core/controller.js';
import UserModel from '../models/user-model.js';
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
    this.model = new UserModel();
    this.view = new MenuView(parent);
    this.events = [];
  }

  /**
   * realize page logic
   */
  action() {
    const form = {id: undefined};
    this.model.sendData(form, undefined)
        .then(() => {
          // temporarily
          window.location.href = '/';
        });
  }
};
