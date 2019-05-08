'use strict';

import View from '../core/view.js';
import {settings} from '../settings/config';
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
   * @param {Object} state
   * @param {Object} user
   * @param {Object} enemy
   */
  render(state, user, enemy) {
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
                    attrs: {src: settings.imgPath + user.img},
                  },
                  {
                    elem: 'nickname',
                    content: [user.nickname || user.username],
                  },
                  {
                    elem: 'item',
                    value: user.highScore,
                  },
                  {
                    elem: 'line',
                  },
                  {
                    elem: 'item',
                    value: state.score,
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
                  content: state.time.toFixed(2),
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
                    attrs: {src: settings.imgPath + enemy.img},
                  },
                  {
                    elem: 'nickname',
                    content: enemy.nickname || enemy.username,
                  },
                  {
                    elem: 'item',
                    value: enemy.highScore,
                  },
                  {
                    elem: 'line',
                  },
                  {
                    elem: 'item',
                    value: state.score,
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
            content: user.score > enemy.score
              ? 'ВЫ ВЫИГРАЛИ' : 'ВЫ ПРОИГРАЛИ',
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
