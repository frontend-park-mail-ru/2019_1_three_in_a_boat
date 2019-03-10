import {settings} from './settings/config.js';
import createHeader from './header.js';
import createPagination from './pagination.js';
import ajax from './ajax.js';


/**
 * Create Score Board page
 * @param {Array}users An Array of personal users data
 */
export default function createScoreBoard(users) {
  createHeader();

  if (users) {
    const data = JSON.parse(JSON.stringify(users));
    const bemUsers = [];

    Array.from(data.data.users).forEach((user) => {
      const {
        firstName: name, img, username,
        highScore: score, uid: userId,
      } = user;
      bemUsers.push({name, img, username, score, userId});
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

    const application = document.getElementById('application');
    application.insertAdjacentHTML('beforeend', bemhtml.apply(draw));

    createPagination(data.data.page + 1, data.data.nPages + 1);
  } else {
    ajax.doGet({path: settings.url + '/users?sort=-HighScore'}).then(
        (response) => {
          if (response.status > 499) {
            alert('Server error');
            return;
          }

          response.json().then((data) => {
            application.innerHTML = '';
            createScoreBoard(data);
          });
        }
    );
  }
}
