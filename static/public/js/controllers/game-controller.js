'use strict';
import GameView from '../views/game-view.js';
import GameModel from '../models/game.js';
import NotificationController from '../controllers/notification-controller.js';
import Controller from '../core/controller.js';
/**
 * The main class Game
 */
export default class Game extends Controller {
  /**
   * Init game object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new GameView(parent);
    this.model = new GameModel();
    this.notify = NotificationController.Instance;
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
    while (this.model.run()) {
      const angel = this.model.getAngel();
      this.notify.sendAngel(angel);
    }
    this.endView.render(this.model.result());
  }
}
