'use strict';

import Controller from '../core/controller.js';
import GameOverMultiPage from '../views/game-over-mlt-view.js';

/**
 * @class GameMenuController
 */
export default class GameOverMltController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new GameOverMultiPage(parent);
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
  }
};