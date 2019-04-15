'use strict';

import Controller from '../core/controller.js';
import GameMenuView from '../views/game-menu-view.js';

/**
 * @class GameMenuController
 */
export default class GameMenuController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new GameMenuView(parent);
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
  }
};
