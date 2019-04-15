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
    // let allkeys = [];
    // allkeys.push.apply(allkeys, Object.keys(this.previous));
    // allkeys.push.apply(allkeys, Object.keys(this.keys));
    // allkeys = allkeys.map((k) => k.toLowerCase());
    // // allkeys = allkeys.filter((key, pos, all) => {
    // //   return all.indexOf(key, pos + 1) === -1;
    // // });
    // console.log(allkeys)
    //
    // const clicked = allkeys.reduce((res, key) => {
    //   res[key] = !this.previous[key] && this.keys[key];
    //   return res;
    // }, {});
    //
    // this.previous = Object.assign({}, this.keys);
    const newKeys = this.keys;
    this.keys = [];
    return newKeys;
  }
}
