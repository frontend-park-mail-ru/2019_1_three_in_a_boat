'use strict';

// import NotificationController from '../controllers/notification-controller.js';
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
    // this.notify = NotificationController.Instance;
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

    this.bus.on(events.FINISH_GAME, () => {
      window.history.pushState({}, '', 'single/results');
      window.history.pushState({}, '', 'single/results');
      window.history.back();
    });

    this.game = new Game(mode, this.view);
    this.game.start();
  }
}
