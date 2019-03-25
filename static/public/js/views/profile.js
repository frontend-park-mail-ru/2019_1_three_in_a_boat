import createHeader from './header.js';
import createUpdateProfile from './update.js';
import {settings} from '../settings/config.js';
import {parseUser} from '../parsing.js';
import ajax from '../ajax.js';
import getTemplate from './views-templates/profile-template.js';
import View from './view.js';


/**
 * @class ProfileView
 */
export default class ProfileView extends View {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  render(user) {
    if (user) {
      const profile = parseUser(user);
      ajax.doGet({path: settings.url + '/'}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }
        return response.json();
      }).then((data) => {
        return [{
          block: 'profile-popup',
          mods: {main: true},
          title: 'Профиль',
          img: profile.img.startsWith(settings.imgPath) ?
              profile.img :
              settings.imgPath + profile.img,
          allowEdit: data.user && data.user.uid === (profile.id || profile.uid),
          info: [
            ['Никнейм', profile.nickname || profile.username],
            ['Имя', profile.firstName],
            ['Фамилия', profile.lastName],
            ['Email', profile.email],
            ['Дата рождения', profile.date],
            ['Пол', profile.gender],
          ],
        }];
      });
    } else {
      ajax.doGet({path: settings.url + '/'}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }

        response.json().then((data) => {
          this.render(data.user);
        });
      });
    }
  }


}

// Array for collecting events
const events = [];

/**
 * Create page with user profile
 */
export function createProfile() {
  createHeader();

  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      const user = parseUser(data.user);
      renderProfile(user);
    });
  });
}

/**
 * Render profile page
 * @param {Object} user
 * @return {Promise} a promise to render the profile and make the world better
 */
export function renderProfile(user) {
  return getTemplate(user).then((template) => {
    const apllication = document.getElementById('application');
    apllication.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    const btn = document.getElementsByClassName('btn_cancel')[0];
    if (btn) {
      const handle = (event) => {
        event.preventDefault();
        removeListeners();
        application.innerHTML = '';
        createUpdateProfile();
      };
      const btn = document.getElementsByClassName('btn_cancel')[0]
      btn.addEventListener('click', handle);
      events.push({item: btn, type: 'click', handler: handle});
    }

    application.addEventListener('click', clickHandler);
    events.push({item: application, type: 'click', handler: clickHandler});
  });
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
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}
