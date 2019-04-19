import bus from '../event-bus.js';
import events from './core/events.js';

/**
 * @class GameControllers
 */
export default class GameControllers {
  /**
   * Constructor
   * @param {object} view
   */
  constructor(view) {
    this.keys = [];

    this.view = view;
    this.keyHandler = this._keyHandler.bind(this);
  }

  /**
   * Начинаем слушать события клавиатуры
   */
  start() {
    document.addEventListener('keydown', this.keyHandler);
    document.addEventListener('keyup', this.keyHandler);
    document.addEventListener('touchstart', this.keyHandler, false);
    document.addEventListener('touchend', this.keyHandler, false);
  }

  /**
   * Прекращаем слушать события клавиатуры
   */
  destroy() {
    document.removeEventListener('keydown', this.keyHandler);
    document.removeEventListener('keyup', this.keyHandler);
    document.removeEventListener('touchstart', this.keyHandler, false);
    document.removeEventListener('touchend', this.keyHandler, false);
  }

  /**
   * Обработчик события
   * @param  {Event} event
   */
  _keyHandler(event) {
    if (event.type.toLowerCase() === 'keydown') {
      bus.emit(events.CONTROLS_PRESSED, event.key);
    } else if (event.type.toLowerCase() === 'keyup') {
      bus.emit(events.CONTROLS_UNPRESSED, event.key);
    } else if (event.type.toLowerCase() === 'touchstart') {
      const touch = event.changedTouches[0];
      if (touch.pageX < this.view.canvas.width / 2) {
        bus.emit(events.CONTROLS_PRESSED, 'ArrowLeft');
      } else {
        bus.emit(events.CONTROLS_PRESSED, 'ArrowRight');
      }
    } else if (event.type.toLowerCase() === 'touchend') {
      bus.emit(events.CONTROLS_UNPRESSED, {});
    }
  }
}
