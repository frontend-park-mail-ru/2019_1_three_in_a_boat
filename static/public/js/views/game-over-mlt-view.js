'use strict';

import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class GameOverMultiClass
 */
export default class GameOverMultiClass extends View {
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
    const template = [
      {
        block: 'game-over',
        mods: {multi: true},
        content: [
          {
            elem: 'title',
            wrappedInside: 'game-over-popup',
            content: ['Результаты'],
          },
          {
            elem: 'column',
            elemMods: {user: true},
            content: [
              {
                block: 'game-info',
                content: [
                  {
                    elem: 'avatar',
                    attrs: {src: '/images/user.png'},
                  },
                  {
                    elem: 'nickname',
                    content: ['USER1'],
                  },
                  {
                    elem: 'item',
                    value: '10:50',
                  },
                  {
                    elem: 'line',
                  },
                  {
                    elem: 'item',
                    value: '6,72',
                  },
                  {
                    elem: 'line',
                  },
                ],
              },
            ],
          },
          {
            elem: 'column',
            mods: {'top': true},
            content: [{
              block: 'result-time',
              title: 'Время',
              content: [
                {
                  elem: 'seconds',
                  content: ['64:45'],
                },
                {
                  elem: 'title',
                  content: ['Время'],
                },
              ],
            },
            {
              block: 'game-info',
              mods: {main: true},
              content: [
                {
                  mix: {'block': 'game-info_main_title'},
                  elem: 'item',
                  name: 'Лучшее время',
                },
                {
                  elem: 'item',
                  name: 'Начисленные очки',
                },
              ],
            }],
          },
          {
            elem: 'column',
            elemMods: {user: true},
            content: [
              {
                block: 'game-info',
                content: [
                  {
                    elem: 'avatar',
                    attrs: {src: '/images/user.png'},
                  },
                  {
                    elem: 'nickname',
                    content: ['USER2'],
                  },
                  {
                    elem: 'item',
                    value: '11:50',
                  },
                  {
                    elem: 'line',
                  },
                  {
                    elem: 'item',
                    value: '6,72',
                  },
                  {
                    elem: 'line',
                  },
                ],
              },
            ],
          },
          {
            block: 'game-msg',
            mods: {'center': true},
            content: ['ВЫ ПРОИГРАЛИ'],
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
