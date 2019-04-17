'use strict';

import GAME_MODES from '../game/mods.js';
import Game from '../game/game.js';
import GameView from '../views/game-view.js';
import Controller from '../core/controller.js';
import events from '../game/core/events.js';
import bus from '../event-bus.js';

/**
 * The main class GameController
 */
export default class GameController extends Controller {
  /**
   * Init game object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new GameView(parent);
    this.game = null;
    this.bus = bus;
  }

  /**
   * Destructor
   */
  destructor() {
    super.destructor();
    this.game.destroy();
  }

  /**
   * Create game logic
   */
  action() {
    let mode = '';
    if (navigator.onLine) {
      mode = GAME_MODES.ONLINE;
    } else {
      mode = GAME_MODES.OFFLINE;
    }

    this.bus.on(events.FINISH_GAME, () => {
      window.history.pushState({}, '', '/single/results');
      window.history.pushState({}, '', '/single/results');
      window.history.back();
      this.destructor();
    });

    this.game = new Game(mode, this.view);
    this.game.start();
  }
}
