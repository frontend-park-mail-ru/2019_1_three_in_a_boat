import GameCore from './core.js';
import WebSocketController from '../../controllers/notification-controller.js';
import bus from '../../event-bus.js';
import showMessage from '../../views/components/disconnect-messagebox.js';
import events from './events.js';
import {CURSOR} from './settings.js';
import {settings} from '../../settings/config.js';

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
    this.gameLoop = this.gameLoop.bind(this);
    this._initWebSocket();
  }

  /**
   * Start game
   */
  start() {
    super.start();
    this.state = {
      hexagons: [],
      cursorAngle: Math.PI / 2,
      score: 0,
      time: 0,
      cursorCircleAngle: 0,
    };

    this.time = performance.now();
    this.finished = false;
    setTimeout(function() {
      bus.emit(events.START_GAME, this.state);
    }.bind(this));
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
      return;
    }
    this.state.time = (performance.now() - this.time) / 1000;

    if (data.hexes) {
      this.state.cursorCircleAngle = data.cursorCircleAngle;
      this.state.score = data.score;
      this.state.hexagons = data.hexes;
      this.state.hexagons.forEach((_, position) => {
        this.state.hexagons[position].sides =
          this.state.hexagons[position].sidesMask;
      });
      bus.emit(events.GAME_STATE_CHANGED, this.state);
    }

    if (data.over) {
      bus.emit(events.FINISH_GAME, this.state);
    }
  }

  /**
   * Control pressed event
   * @param {object} evt
   */
  onControlsPressed(evt) {
    if (!this.controllersLoopIntervalId) {
      this.controllersLoopIntervalId = setInterval(() => {
        if (this._pressed('LEFT', evt)) {
          this.state.cursorAngle += CURSOR.rotatingSpeed;
        } else if (this._pressed('RIGHT', evt)) {
          this.state.cursorAngle -= CURSOR.rotatingSpeed;
        }
        this.ws.sendData(JSON.stringify({angle: this.state.cursorAngle}));
      }, 50);
    }
  }

  /**
   * Control unpressed event
   * @param {object} evt
   */
  onControlsUnpressed(evt) {
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
    this.finished = true;
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
    this.ws.close();
    this.scene.stop();
  }

  /**
   * State change game event
   * @param {object} evt
   */
  onGameStateChanged(evt) {
    this.scene.update(evt);
  }

  /**
   * Handle websocket disconnect
   * @private
   */
  _webSocketDisconnectHandler() {
    if (!this.finished) {
      showMessage(this.scene.parent);
    }
  }

  /**
   * Init web socket handlers
   * @private
   */
  _initWebSocket() {
    this.ws = new WebSocketController('/play', this.gameLoop.bind(this),
        this._webSocketDisconnectHandler.bind(this),
        settings.wsUrl + settings.gamePort);
  }
}
