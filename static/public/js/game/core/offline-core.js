import GameCore from './core.js';
import Geometry from './geometry.js';
import bus from '../../event-bus.js';
import events from './events.js';
import {HEXAGON, CURSOR} from './settings.js';

const mask2 = 1;
const mask5 = 31;

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
    this.gameloopRequestId = null;
    this.lastFrame = 0;
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

    this.state.hexagons = Array.from(new Array(3), function(_, position) {
      return {
        side: 400 + 300 * position,
        sides: Math.floor(Math.random() * 2) === 1? mask2: mask5,
        angle: Math.floor(Math.random() * 2 * Math.PI),
      };
    });

    setTimeout(function() {
      bus.emit(events.START_GAME, this.state);
    }.bind(this));
  }

  /**
   * GameController loop action
   * @param {number} now
   */
  gameloop(now) {
    const delay = now - this.lastFrame;
    this.lastFrame = now;
    this.state.hexagons = this.state.hexagons
        .map(function(hexagon) {
          hexagon.side -= HEXAGON.speed * delay;
          hexagon.angle += HEXAGON.rotatingSpeed * delay;
          return hexagon;
        });

    for (let i = 0; i < this.state.hexagons.length; i++) {
      if (this.state.hexagons[i].side < HEXAGON.minSize) {
        const newHexagon = {
          side: 1100,
          sides: Math.floor(Math.random() * 2) === 1 ? mask2 : mask5,
          angle: Math.floor(Math.random() * 2 * Math.PI),
        };
        this.state.hexagons[i] = newHexagon;
      }
    }

    bus.emit(events.GAME_STATE_CHANGED, this.state);

    const cursor = Geometry.cursorAngleToDot(this.state.cursorAngle);

    for (let i = 0; i < this.state.hexagons.length; i++) {
      const condition = Geometry.checkHexagonCollision(
          this.state.hexagons[i], cursor
      );

      if (condition) {
        bus.emit(events.FINISH_GAME);
        return;
      }
    }

    this.gameloopRequestId = requestAnimationFrame(this.gameloop);
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

    this.lastFrame = performance.now();
    this.gameloopRequestId = requestAnimationFrame(this.gameloop);
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
    cancelAnimationFrame(this.gameloopRequestId);
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
