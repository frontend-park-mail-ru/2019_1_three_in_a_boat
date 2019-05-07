'use strict';

import OfflineGame from './online-single-core.js';
import WebSocketController from '../../controllers/notification-controller.js';
import bus from '../../event-bus.js';
import events from './events.js';

/**
 * @class MultiPlayerCore
 */
export default class MultiPlayerCore extends OfflineGame {
  /**
   * Constructor
   * @param {object} controller
   * @param {object} scene
   */
  constructor(controller, scene) {
    super(controller, scene);
  }

  /**
   * Start game
   */
  start() {
    super.start();
    this.state.enemyCursorAngle = Math.PI / 2;
  }

  /**
   * GameController loop action
   * @param {object} message
   */
  gameLoop(message) {
    let data;
    try { // TODO get game id here
      console.log(message.data);
      data = JSON.parse(message.data);
    } catch (e) {
      console.log(message);
      this.number = Number(message.data.split()[1]);
      return;
    }
    this.state.time = (performance.now() - this.time) / 1000;

    if (data.hexes) {
      this.state.cursorCircleAngle = data.cursorCircleAngle;
      this.state.enemyCursorAngle = data.otherAngle;
      this.state.score = this.number === 1? data.score1 : data.score2;
      this.state.enemyScpre = this.number === 1? data.score2 : data.score1;
      this.state.hexagons = data.hexes;
      this.state.hexagons.forEach((_, position) => {
        this.state.hexagons[position].sides =
          this.state.hexagons[position].sidesMask;
      });
      bus.emit(events.GAME_STATE_CHANGED, this.state);
    }

    if (data.over1 || data.over2) {
      this.state.over1 = data.over1;
      this.state.over2 = data.over2;
      bus.emit(events.FINISH_GAME, this.state);
    }
  }

  /**
   * Init web socket handlers
   * @private
   */
  _initWebSocket() {
    this.ws = new WebSocketController('/play/multi', this.gameLoop.bind(this),
        this._webSocketDisconnectHandler.bind(this));
  }
}
