import {settings} from '../settings/config.js';
import ajax from '../ajax.js';
import {renderProfile} from './profile.js';
import View from './view.js';
import PaginationView from './pagination.js';

/**
 * Create Score Board page
 * @param {Array}users An Array of personal users data
 */
export default class ScoreboardView extends View {
  render(users) {
    if (users) {
      const data = JSON.parse(JSON.stringify(users));
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
      const paginator = new PaginationView(this.parent);
      paginator.createPagination(data.data.page + 1, data.data.nPages + 1);

      const profiles = document.getElementsByClassName('scoreboard__link');
      Array.from(profiles).forEach((link) => {
        if (Number(link.value) < 1) {
          return;
        }

        link.addEventListener('click', this.eventHandler);
        this.events.push({item: link, type: 'click', handler: this.eventHandler});
      });
    } else {
      ajax.doGet({path: settings.url + '/users?sort=-highscore'}).then(
          (response) => {
            if (response.status > 499) {
              alert('Server error');
              return;
            }

            response.json().then((data) => {
              this.parent.innerHTML = '';
              this.render(data);
            });
          }
      );
    }
  }

  /**
   * Handle click on profile link
   * @param {Event} event
   */
  eventHandler(event) {
    event.preventDefault();

    const path = settings.url + '/users/'
      + event.target.closest('.scoreboard__link').getAttribute('value');
    ajax.doGet({path}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        this.parent.innerHTML = '';
        const user = data.data;
        renderProfile(user);
      });
    });
  }
}
