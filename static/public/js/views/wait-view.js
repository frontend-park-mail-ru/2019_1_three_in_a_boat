'use strict';

import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class WaitView
 */
export default class WaitView extends View {
  /**
   * @constructor
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Draw loader block
   */
  render() {
    const template = [
      {
        block: 'offline-msg',
        content: {
          elem: 'window',
          elemMods: {wait: true},
          content: [
            {
              elem: 'text',
              content: 'Ожидание игрока',
            },
            {
              block: 'wait',
              content:
                [
                  {
                    elem: 'loader',
                    value: 1,
                  },
                ],
            },
            {
              elem: 'btn',
              attrs: {'href': '#'},
              tag: 'a',
              content: 'Назад',
            },
          ],
        },
      },
    ];
    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  }

  /**
   * Hide wait message
   */
  hide() {
    document.getElementsByClassName('offline-msg')[0].remove();
  }
}
