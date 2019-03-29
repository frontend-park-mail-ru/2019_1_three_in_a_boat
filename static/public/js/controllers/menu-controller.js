'use strict';

import Controller from '../core/controller.js';
// import MenuModel from '../models/menu-model.js';
import MenuView from '../views/menu-view.js';
import UserModel from '../models/user-model.js';

/**
 * @class MenuController
 */
export default class MenuController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.user = null;
    this.view = new MenuView(parent);
  }
  /**
   * Create action
   */
  action() {
    UserModel.getData().then(
        (user) => {
          this.user = user;
          this.view.render(this.user);
        }
    );
  }
};
