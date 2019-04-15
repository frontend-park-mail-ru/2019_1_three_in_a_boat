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
        side: 700 + 200 * position,
        sides: Math.floor(Math.random() * 2) === 1? mask2: mask5,
        angle: 0, // Math.floor(Math.random() * 2 * Math.PI),
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
          hexagon.angle += 0; // HEXAGON.rotatingSpeed * delay;
          return hexagon;
        });

    for (let i = 0; i < this.state.hexagons.length; i++) {
      if (this.state.hexagons[i].side < HEXAGON.minSize) {
        const newHexagon = {
          side: 700,
          sides: Math.floor(Math.random() * 2) === 1 ? mask2 : mask5,
          angle: 0, // Math.floor(Math.random() * 2 * Math.PI),
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
        console.log(this.state.hexagons[i], cursor);
        setTimeout(function() {
          alert('finish');
          bus.emit(events.FINISH_GAME);
        });
        // return;
      }
    }

    this.gameloopRequestId = requestAnimationFrame(this.gameloop);
  }

  /**
   *
   * @param evt
   */
  onControllsPressed(evt) {
    evt.forEach((btn) => {
      if (this._pressed('LEFT', btn)) {
        this.state.cursorAngle += CURSOR.rotatingSpeed;
      } else if (this._pressed('RIGHT', btn)) {
        this.state.cursorAngle -= CURSOR.rotatingSpeed;
      }
    });
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
