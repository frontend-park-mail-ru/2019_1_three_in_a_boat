import GameCore from 'core.js';
import bus from '../../event-bus.js';
import events from 'events.js';

const CURSOR = {
  radius: 100,
  height: 40,
};

const HEXAGON = {
  minSize: 20,
  width: 10,
  speed: 20,
};

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
      cursorAngle: 0,
    };

    this.state.hexagons = Array.from(new Array(3), function(_, position) {
      return {
        radius: 700 + 50 * position,
        sides: Math.floor(Math.random() * 2) === 1? mask2: mask5,
        angle: Math.floor(Math.random() * 360),
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
          hexagon.radius += HEXAGON.speed * delay;
          return hexagon;
        })
        .filter(function(hexagon) {
          if (hexagon.radius < HEXAGON.minSize) {
            const newHexagon = {
              radius: 700,
              sides: Math.floor(Math.random() * 2) === 1? mask2: mask5,
              angle: Math.floor(Math.random() * 360),
            };
            this.state.hexagons.unshift(newHexagon);
            return false;
          }

          return true;
        }.bind(this));

    bus.emit(events.GAME_STATE_CHANGED, this.state);

    this.state.hexagons.forEach((hexagon) => {
      const condition = false; // TODO check collisions
      if (condition) {
        setTimeout(function() {
          bus.emit('CLOSE_GAME');
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
      this.state.cursorAngle--;
    } else if (this._pressed('RIGHT', evt)) {
      this.state.cursorAngle++;
    }
  }

  /**
   *
   * @param evt
   */
  onGameStarted(evt) {
    this.controller.start();
    this.scene.init(evt);
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

    bus.emit(events.FINISH_GAME);
  }

  /**
   *
   * @param evt
   */
  onGameStateChanged(evt) {
    this.scene.setState(evt);
  }
}
