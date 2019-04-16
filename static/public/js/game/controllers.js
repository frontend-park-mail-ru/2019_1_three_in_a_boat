/**
 * @class GameControllers
 */
export default class GameControllers {
  /**
   * Constructor
   */
  constructor() {
    this.previous = {};
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
   * Нажата ли клавиша?
   * @param  {string}  key
   * @return {boolean}
   */
  is(key) {
    return this.keys[key];
  }

  /**
   * Обработчик события
   * @param  {string} type
   * @param  {MouseEvent} event
   */
  _keyHandler(type, event) {
    if (event.type.toLowerCase() === 'keydown') {
      this.keys.push(event.key);
    }
  }

  /**
   * Получить клавиши, нажатые с момента прошлого запроса
   * @return {*}
   */
  diff() {
    const newKeys = this.keys;
    this.keys = [];
    return newKeys;
  }
}
