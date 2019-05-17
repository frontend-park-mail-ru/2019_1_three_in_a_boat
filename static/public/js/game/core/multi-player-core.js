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
    this.state.enemyCursorAngle = -Math.PI / 2;
  }

  /**
   * GameController loop action
   * @param {object} message
   */
  gameLoop(message) {
    let data;
    try { // TODO get game id here
      data = JSON.parse(message.data);
    } catch (e) {
      const ids = message.data.split(' ');
      this.state.gameId = ids[0];
      this.state.number = Number(ids[1]);
      if (this.state.number === 2) {
        this.state.cursorAngle = -Math.PI / 2;
        this.state.enemyCursorAngle = Math.PI / 2;
      }
      this.state.enemyId = Number(ids[2]);
      bus.emit(events.ROOM_FULL, {});
      bus.emit(events.GAME_STATE_CHANGED, this.state);
      return;
    }
    this.state.time = (performance.now() - this.time) / 1000;
    if (data.hexes) {
      this.state.cursorCircleAngle = data.cursorCircleAngle;
      this.state.enemyCursorAngle = data.otherAngle;
      if (this.state.number === 1) {
        this.state.score = data.score1;
        this.state.enemyScore = data.score2;
      } else {
        this.state.score = data.score2;
        this.state.enemyScore = data.score1;
      }
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
