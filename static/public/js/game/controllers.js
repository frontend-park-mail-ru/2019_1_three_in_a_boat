import bus from '../event-bus.js';
import events from './core/events.js';

/**
 * @class GameControllers
 */
export default class GameControllers {
  /**
   * Constructor
   */
  constructor() {
    this.keys = [];

    this._onPress = this._keyHandler.bind(this, 'press');
    this._onUp = this._keyHandler.bind(this, 'up');
  }

  /**
   * Начинаем слушать события клавиатуры
   */
  start() {
    document.addEventListener('keydown', this._onPress);
    document.addEventListener('keyup', this._onUp);
  }

  /**
   * Прекращаем слушать события клавиатуры
   */
  destroy() {
    document.removeEventListener('keydown', this._onPress);
    document.removeEventListener('keyup', this._onUp);
  }

  /**
   * Обработчик события
   * @param  {string} type
   * @param  {MouseEvent} event
   */
  _keyHandler(type, event) {
    if (event.type.toLowerCase() === 'keydown') {
      bus.emit(events.CONTROLS_PRESSED, event.key);
    }
    if (event.type.toLowerCase() === 'keyup') {
      bus.emit(events.CONTROLS_UNPRESSED, event.key);
    }
  }
}
