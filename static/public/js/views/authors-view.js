import {settings} from '../settings/config.js';
import View from '../core/view.js';

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
    if (authors) {
      const bemAuthors = [];

      Array.from(authors).forEach((author) => {
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
              elem: 'items',
              authors: bemAuthors,
            },
          ],
        },
      ];

      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    } else {
      // draw loading???
    }
  }
}
