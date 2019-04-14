import {settings} from '../settings/config.js';
import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class AuthorsView
 */
export default class AuthorsView extends View {
  /**
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }
  /**
   * create Page with Authors
   * @param {Object} authors Authors JSON, in the format returned by the server
   */
  render(authors) {
    const data = JSON.parse(JSON.stringify(authors));
    const bemAuthors = [];

    Array.from(data).forEach((author) => {
      const {name, devInfo, img, description} = author;
      bemAuthors.push({
        name, devInfo,
        img: settings.imgPath + img, description,
      });
    });

    const draw = [
      {
        block: 'authors',
        content: [
          {
            elem: 'header',
            content: 'Проект разработали',
          },
          {
            block: 'icon',
            tag: 'a',
            wrappedInside: 'authors',
            wrappedAs: 'close-popup',
            mods: {
              size: 'large',
              color: 'black',
              btn: true,
              type: 'cross',
            },
            attrs: {
              'data-link-type': '/',
            },
          },
          {
            elem: 'items',
            authors: bemAuthors,
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  }
}
