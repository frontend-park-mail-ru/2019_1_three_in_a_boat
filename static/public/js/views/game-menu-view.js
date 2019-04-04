'use strict';

import View from '../core/view.js';

/**
 * @class GameMenuView
 */
export default class GameMenuView extends View {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }
  /**
   * create game menu page
   */
  render() {
    const template = [
      {
        block: 'menu',
        content: [
          {
            elem: 'items',
            points: [
              {
                href: 'single',
                text: 'Синглплеер',
                type: 'gamepad',
              },
              {
                href: 'multi',
                text: 'Мультиплеер',
                type: 'users',
              },
              {
                href: '/',
                text: 'Главное меню',
                type: 'menu',
              },
            ],
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  }
}
