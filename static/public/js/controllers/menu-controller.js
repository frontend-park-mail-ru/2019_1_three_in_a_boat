'use strict';

import Controller from '../core/controller.js';
import MenuModel from '../models/menu-model.js';
import MenuView from '../views/menu-view.js';

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
    this.model = new MenuModel();
    this.view = new MenuView(parent);
  }
  /**
   * Create action
   */
  action() {
    this.user = this.model.getData();
    this.view.render(this.user);
  }
};
