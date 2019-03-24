import {settings} from '../settings/config.js';
import createHeader from './header.js';
import createPagination from './pagination.js';
import ajax from '../ajax.js';
import {renderProfile} from './profile.js';

// Array for collecting events
const events = [];

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

    const application = document.getElementById('application');
    application.insertAdjacentHTML('beforeend', bemhtml.apply(draw));

    createPagination(data.data.page + 1, data.data.nPages + 1);

    const profiles = document.getElementsByClassName('scoreboard__link');
    Array.from(profiles).forEach((link) => {
      if (Number(link.value) < 1) {
        return;
      }

      link.addEventListener('click', eventHandler);
      events.push({item: link, type: 'click', handler: eventHandler});
    });

    application.addEventListener('click', clickHandler);
    events.push({item: application, type: 'click', handler: clickHandler});
  } else {
    ajax.doGet({path: settings.url + '/users?sort=-highscore'}).then(
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


/**
 * Calls removeListeners with click on some link
 * @param {Event} event
 */
function clickHandler(event) {
  const link = event.target.closest('[data-link-type]');
  if (link === null) {
    return;
  }
  removeListeners();
}

/**
 * Handle click on profile link
 * @param {Event} event
 */
function eventHandler(event) {
  event.preventDefault();
  removeListeners();

  const path = settings.url + '/users/'
      + event.target.closest('.scoreboard__link').getAttribute('value');
  ajax.doGet({path}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      application.innerHTML = '';
      const user = data.data;
      createHeader();
      renderProfile(user);
    });
  });
}

/**
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}
