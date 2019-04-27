import GameCore from './core.js';
import Geometry from './geometry.js';
import bus from '../../event-bus.js';
import events from './events.js';
import {CURSOR, HEXAGON} from './settings.js';

const mask2 = 4;
const mask5 = 22;

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
      score: 0,
      time: 0,
      cursorCircleAngle: 0,
      clockWise: true,
    };
    this.tick = 0;
    this.hexagonsSpeed = HEXAGON.speed;

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
  gameLoop(now) {
    const delay = now - this.lastFrame;
    this.state.time += delay / 1000;

    this.lastFrame = now;
    ++this.tick;
    let difficultyIncrement = 1 + 1e-2 * 0.02 * this.tick;
    if (difficultyIncrement > 2) {
      difficultyIncrement = 2;
    }

    const ticksSinceRotation = this.tick % Math.round(15 * 25);
    if (ticksSinceRotation === 0) {
      this.state.clockWise = !this.state.clockWise;
    }

    const ticksToRotation = Math.min(ticksSinceRotation,
        Math.abs(ticksSinceRotation - 15 * 0.02));
    const rotationAmplitude = Math.min(1,
        Math.max(0.5, 3 * ticksToRotation / 15 * 0.02));

    let rotationDirection = 1.0;
    if (!this.state.clockWise) {
      rotationDirection = -1;
    }
    let angleIncrement = rotationAmplitude * rotationDirection;
    angleIncrement *= Math.PI / 3 * 0.025 * difficultyIncrement;
    this.state.cursorCircleAngle += angleIncrement;
    this.hexagonsSpeed += 0.0001 * difficultyIncrement;
    this.state.hexagons = this.state.hexagons
        .map((hexagon) => {
          hexagon.side -= this.hexagonsSpeed * delay;
          hexagon.angle += angleIncrement;
          return hexagon;
        });

    for (let i = 0; i < this.state.hexagons.length; i++) {
      if (this.state.hexagons[i].side < HEXAGON.minSize) {
        this.state.hexagons[i] = {
          side: 900,
          sides: Math.floor(Math.random() * 2) === 1 ? mask2 : mask5,
          angle: Math.floor(Math.random() * 2 * Math.PI),
        };
        this.state.score += 10;
      }
    }

    bus.emit(events.GAME_STATE_CHANGED, this.state);

    const cursor = Geometry.cursorAngleToDot(
        this.state.cursorAngle - this.state.cursorCircleAngle);

    for (let i = 0; i < this.state.hexagons.length; i++) {
      const condition = Geometry.checkHexagonCollision(
          this.state.hexagons[i], cursor
      );

      if (condition) {
        bus.emit(events.FINISH_GAME, this.state);
        return;
      }
    }

    this.gameloopRequestId = requestAnimationFrame(this.gameLoop);
  }

  /**
   * Control pressed event
   * @param {object} evt
   */
  onControlsPressed(evt) {
    if (!this.controllersLoopIntervalId) {
      this.controllersLoopIntervalId = setInterval(() => {
        const speed = CURSOR.rotatingSpeed;
        if (this._pressed('LEFT', evt)) {
          this.state.cursorAngle += speed;
        } else if (this._pressed('RIGHT', evt)) {
          this.state.cursorAngle -= speed;
        }
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

    this.lastFrame = performance.now();
    this.gameloopRequestId = requestAnimationFrame(this.gameLoop);
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
