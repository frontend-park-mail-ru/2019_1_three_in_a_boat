import GameCore from './core.js';
import Geometry from './geometry.js';
import WebSocketController from '../../controllers/notification-controller.js';
import bus from '../../event-bus.js';
import events from './events.js';
import {CURSOR} from './settings.js';

/**
 * Offline game core class
 */
export default class OfflineGame extends GameCore {
  /**
   * Constructor
   * @param {object} controller
   * @param {object} scene
   */
  constructor(controller, scene) {
    super(controller, scene);
    this.scene = scene;
    this.state = {};
    this.gameloop = this.gameloop.bind(this);
    this.lastFrame = 0;
    this.ws = new WebSocketController('/play', this.gameloop.bind(this));
  }

  /**
   * Start game
   */
  start() {
    super.start();
    this.state = {
      hexagons: [],
      cursorAngle: Math.PI / 2,
    };

    setTimeout(function() {
      bus.emit(events.START_GAME, this.state);
    }.bind(this));
  }

  /**
   * GameController loop action
   * @param {object} message
   */
  gameloop(message) {
    const data = JSON.parse(message.data);
    console.log(message);
    if (data.hexes) {
      this.state.score = data.score;
      this.state.hexagons = data.hexes;
      this.state.hexagons.forEach((_, position) => {
        this.state.hexagons[position].sides =
          this.state.hexagons[position].sidesMask;
      });
      bus.emit(events.GAME_STATE_CHANGED, this.state);
    }

    if (data.over) {
      bus.emit(events.FINISH_GAME);
    }
  }

  /**
   * Control pressed event
   * @param {object} evt
   */
  onControllsPressed(evt) {
    if (!this.controllersLoopIntervalId) {
      this.controllersLoopIntervalId = setInterval(() => {
        if (this._pressed('LEFT', evt)) {
          this.state.cursorAngle += CURSOR.rotatingSpeed;
        } else if (this._pressed('RIGHT', evt)) {
          this.state.cursorAngle -= CURSOR.rotatingSpeed;
        }
        this.ws.sendData({angle: this.state.cursorAngle});
      }, 50);
    }
  }

  /**
   * Control unpressed event
   * @param {object} evt
   */
  onControllsUnpressed(evt) {
    clearInterval(this.controllersLoopIntervalId);
    this.controllersLoopIntervalId = undefined;
  }

  /**
   * Start game event
   * @param {object} evt
   */
  onGameStarted(evt) {
    this.controller.start();
    this.scene.render(evt);
    this.scene.start();
  }

  /**
   * Finish game event
   * @param {object} evt
   */
  onGameFinished(evt) {
    this.destroy();
  }

  /**
   * Destructor
   */
  destroy() {
    super.destroy();
    if (this.controllersLoopIntervalId) {
      clearInterval(this.controllersLoopIntervalId);
    }
    this.scene.stop();
  }

  /**
   * State change game event
   * @param {object} evt
   */
  onGameStateChanged(evt) {
    this.scene.update(evt);
  }
}
