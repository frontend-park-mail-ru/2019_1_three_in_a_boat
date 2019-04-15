import {settings} from '../settings/config.js';
import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * Create Score Board page
 * @param {Array}users An Array of personal users data
 */
export default class ScoreboardView extends View {
  /**
   * Render ScoreBoard
   * @param {Object} data
   */
  render(data) {
    const bemUsers = [];

    Array.from(data.data.users).forEach((user) => {
      const {
        firstName: name, img, username,
        highScore: score, uid: userId,
      } = user;
      bemUsers.push({
        name, img: settings.imgPath + img,
        username, score, userId,
      });
    });

    const draw = [
      {
        block: 'scoreboard',
        content: [
          {
            elem: 'items',
            scores: bemUsers,
          },
        ],
      },
    ];

    draw[0].content[0].page = parseInt(data.data.page) || 0;

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  }
}
