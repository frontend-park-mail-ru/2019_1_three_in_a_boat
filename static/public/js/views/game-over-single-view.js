'use strict';

import View from '../core/view.js';

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
   */
  render() {
    console.log('creating template...');

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
                content: ['64:45'],
              },
            ],
          },
          {
            block: 'game-info',
            content: [
              {
                elem: 'item',
                name: 'Лучшее время',
                value: '10:50',
              },
              {
                elem: 'line',
              },
              {
                elem: 'item',
                name: 'Счет',
                value: '6,72',
              },
              {
                elem: 'line',
              },
            ],
          },
          {
            block: 'game-msg',
            mods: {'center': true},
            content: ['Новый рекорд!']
          },
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
};
