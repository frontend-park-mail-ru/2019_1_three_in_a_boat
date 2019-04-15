'use strict';

import Controller from '../core/controller.js';
import GameOverSinglePage from '../views/game-over-single-view.js';

/**
 * @class GameMenuController
 */
export default class GameOverController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new GameOverSinglePage(parent);
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
  }
};
