'use strict';

import NotificationController from '../controllers/notification-controller.js';
import GAME_MODES from '../game/mods.js';
import Game from '../game/game.js';
import Controller from '../core/controller.js';

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
    this.canvas = null;
    this.game = null;
    this.notify = NotificationController.Instance;

    this.bus.on('CLOSE_GAME', function() {
      if (this.active) {
        this.router.open('/');
      }
    }.bind(this));
  }

  /**
   * Destructor
   */
  destructor() {
    super.destructor();
    this.game.destroy();
  }

  /**
   * Choose and make action
   * @param {Object} serverData
   */
  static selectAction(serverData) {
    switch (serverData) {
      case 'event': {
        // handel event
        break;
      }
      case 'other event': {
        // handel other event
        break;
      }
      case 'other event too': {
        // handel other event too
        break;
      }

      default: {
        // handel default event
      }
    }
  }

  /**
   * Create game logic
   */
  action() {
    // init event listeners
    // while WebSocket.connect
    // while (this.model.run()) {
    //   const angel = this.model.getAngel();
    //   this.notify.sendAngel(angel);
    // }
    // this.endView.render(this.model.result());

    let mode = '';
    if (false) { // TODO replace it in future
      mode = GAME_MODES.ONLINE;
    } else {
      mode = GAME_MODES.OFFLINE;
    }

    this.game = new Game(mode, this.canvas);
    this.game.start();
  }
}
