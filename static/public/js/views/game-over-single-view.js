'use strict';

import View from '../core/view.js';
import GAME_MODES from '../game/mods.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class GameOverSingleClass
 */
export default class GameOverSingleClass extends View {
  /**
   * Construct game over page
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * render page
   * @param {object} state - Game state
   * @param {string} mode - Game mode
   */
  render(state, mode) {
    const record = state.score > state.highScore;

    const template = [
      {
        block: 'game-over',
        content: [
          {
            elem: 'title',
            wrappedInside: 'game-over-popup',
            content: ['Результаты'],
          },
          {
            block: 'result-time',
            title: 'Время',
            content: [
              {
                elem: 'title',
                content: ['Время'],
              },
              {
                elem: 'seconds',
                content: [this._convertTime(state.time)],
              },
            ],
          },
          {
            block: 'game-info',
            mods: {'single': true},
            content: [
              mode === GAME_MODES.OFFLINE || !state.highScore? {}: {
                elem: 'item',
                name: 'Лучший счет',
                value: state.highScore,
              },
              {
                elem: 'line',
              },
              {
                elem: 'item',
                name: 'Счет',
                value: state.score,
              },
              {
                elem: 'line',
              },
            ],
          },
          record? {
            block: 'game-msg',
            mods: {'center': true},
            content: ['Новый рекорд!'],
          }: {},
          {
            block: 'result-redirect',
            content: [
              {
                elem: 'btn',
                mods: {'center': true},
                btnText: 'СЫГРАТЬ ЕЩЕ РАЗ',
              },
              {
                elem: 'center',
                content: {
                  elem: 'link',
                  attrs: {'href': '#', 'data-link-type': '/'},
                  content: 'Выйти в главное меню',
                },
              },
            ],
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  }

  /**
   * Convert time to string
   * @param {number} time
   * @return {string}
   * @private
   */
  _convertTime(time) {
    return time.toFixed(2).toString();
  }
};
