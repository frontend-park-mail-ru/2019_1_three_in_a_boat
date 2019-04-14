import bus from '../../event-bus.js';
import events from './events.js';

const KEYS = {
  LEFT: ['a', 'A', 'ф', 'Ф', 'ArrowLeft'],
  RIGHT: ['d', 'D', 'в', 'В', 'ArrowRight'],
};

/**
 * Base class for all game cores
 */
export default class GameCore {
  /**
   *
   * @param controller
   * @param scene
   */
  constructor(controller, scene) {
    this.controller = controller;
    this.scene = scene;

    this.onGameStarted = this.onGameStarted.bind(this);
    this.onGameFinished = this.onGameFinished.bind(this);
    this.onControllsPressed = this.onControllsPressed.bind(this);
    this.onGameStateChanged = this.onGameStateChanged.bind(this);

    this.controllersLoopIntervalId = null;
  }

  /**
   *
   */
  start() {
    bus.on(events.START_GAME, this.onGameStarted);
    bus.on(events.FINISH_GAME, this.onGameFinished);
    bus.on(events.CONTROLS_PRESSED, this.onControllsPressed);
    bus.on(events.GAME_STATE_CHANGED, this.onGameStateChanged);

    const controller = this.controller;
    this.controllersLoopIntervalId = setInterval(() => {
      const actions = controller.diff();

      if (Object.keys(actions).some((k) => actions[k])) {
        bus.emit(events.CONTROLS_PRESSED, actions);
      }
    }, 50);
  }

  /**
   *
   */
  destroy() {
    clearInterval(this.controllersLoopIntervalId);
    bus.off(events.START_GAME, this.onGameStarted);
    bus.off(events.FINISH_GAME, this.onGameFinished);
    bus.off(events.CONTROLS_PRESSED, this.onControllsPressed);
    bus.off(events.GAME_STATE_CHANGED, this.onGameStateChanged);

    this.controller.destroy();
    this.scene.stop();
  }

  /**
   *
   * @param evt
   */
  onControllsPressed(evt) {
    throw new Error('This method must be overridden');
  }

  /**
   *
   * @param evt
   */
  onGameStarted(evt) {
    throw new Error('This method must be overridden');
  }

  /**
   *
   * @param evt
   */
  onGameFinished(evt) {
    throw new Error('This method must be overridden');
  }

  /**
   *
   * @param evt
   */
  onGameStateChanged(evt) {
    throw new Error('This method must be overridden');
  }

  /**
   *
   * @param name
   * @param data
   * @return {boolean}
   * @private
   */
  _pressed(name, data) {
    return KEYS[name].some((k) => data[k.toLowerCase()]);
  }
};