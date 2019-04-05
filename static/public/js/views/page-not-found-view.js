'use strict';

import View from '../core/view.js';

/**
 * @class PageNotFoundView
 */
export default class PageNotFoundView extends View {
  /**
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }
  /**
   * create Page with Authors
   */
  render() {
    const draw = [
      {
        block: 'not-found-page',
        content: [
          {
            elem: 'text',
            elemMods: {main: true},
            content: 'Oops, we have lost this page :C',
          },
          {
            elem: 'text',
            elemMods: {additional: true},
            content: 'or you typed something wrong C:',
          },
          {
            elem: 'link',
            attrs: {'href': '#', 'data-link-type': '/'},
            content: 'But you can go to our main page!',
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  }
}
