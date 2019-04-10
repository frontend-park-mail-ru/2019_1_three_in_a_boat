'use strict';

import Controller from '../core/controller.js';
// import MenuModel from '../models/menu-model.js';
import MenuView from '../views/menu-view.js';
import UserService from '../models/user-service.js';

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
        },
        (error) => {
          console.log(error);
        }
    );
  }
};
