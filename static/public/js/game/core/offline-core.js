import GameCore from './core.js';
import Geometry from './geometry.js';
import bus from '../../event-bus.js';
import events from './events.js';
import {HEXAGON, CURSOR} from './settings.js';

const mask2 = 9;
const mask5 = 31;

/**
 * Offline game core class
 */
export default class OfflineGame extends GameCore {
  /**
   *
   * @param controller
   * @param scene
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
        side: 700 + 50 * position,
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
        })
        .filter(function(hexagon) {
          if (hexagon.side < HEXAGON.minSize) {
            const newHexagon = {
              side: 700,
              sides: Math.floor(Math.random() * 2) === 1? mask2: mask5,
              angle: Math.floor(Math.random() * 360),
            };
            this.state.hexagons.unshift(newHexagon);
            return false;
          }

          return true;
        }.bind(this));

    bus.emit(events.GAME_STATE_CHANGED, this.state);

    const cursor = Geometry.cursorAngleToDot(this.state.cursorAngle);
    this.state.hexagons.forEach((hexagon) => {
      let condition = false;
      this.state.hexagons.forEach((hexagon) => {
        condition = Geometry.checkHexagonCollision(hexagon, cursor);
      });

      if (condition) {
        setTimeout(function() {
          bus.emit(events.FINISH_GAME);
        });
      }
    });

    this.gameloopRequestId = requestAnimationFrame(this.gameloop);
  }

  /**
   *
   * @param evt
   */
  onControllsPressed(evt) {
    if (this._pressed('LEFT', evt)) {
      this.state.cursorAngle += CURSOR.rotatingSpeed;
    } else if (this._pressed('RIGHT', evt)) {
      this.state.cursorAngle -= CURSOR.rotatingSpeed;
    }
  }

  /**
   *
   * @param evt
   */
  onGameStarted(evt) {
    this.controller.start();
    this.scene.render(evt);
    this.scene.start();

    this.lastFrame = performance.now();
    this.gameloopRequestId = requestAnimationFrame(this.gameloop);
  }

  /**
   *
   * @param evt
   */
  onGameFinished(evt) {
    cancelAnimationFrame(this.gameloopRequestId);
    this.scene.stop();
  }

  /**
   *
   * @param evt
   */
  onGameStateChanged(evt) {
    this.scene.update(evt);
  }
}
