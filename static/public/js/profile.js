import createHeader from './header.js';
import createUpdateProfile from './update.js';
import {addValidationOnBlur} from './validation.js';
import {settings} from './settings/config.js';
import {parseUser} from './parsing.js';
import AjaxModule from './ajax.js';

/**
 * Create page with user profile
 */
export default function createProfile() {
  createHeader();
  const ajax = new AjaxModule();
  ajax.doGet({
    callback(xhr) {
      const data = JSON.parse(xhr.responseText);
      const user = parseUser(data.user);
      renderProfile(user);
    },
    path: settings.url+ '/',
  });
}

/**
 * Render profile page
 * @param {Object} user
 */
function renderProfile(user) {
  const template = [{
    block: 'profile-popup',
    mods: {main: true},
    content: [
      {
        block: 'title',
        wrappedInside: 'profile-popup',
        content: ['Профиль'],
      },
      {
        elem: 'profile-icon',
        attrs: {src: user.img},
      },
      {
        block: 'profile-info',
        wrappedInside: 'profile-popup',
        userInfo: [
          ['Никнейм', user.nickname],
          ['Имя', user.firstName],
          ['Фамилия', user.lastName],
          ['Email', user.email],
          ['Дата рождения', user.date],
          ['Пол', user.gender],
        ],
      },
      {
        elem: 'double-btn',
        content: [
          {
            block: 'btn',
            mods: {'size': 'large', 'with-icon': true, 'cancel': true},
            wrappedInside: 'profile-popup',
            content: [
              {
                block: 'icon',
                wrappedInside: 'btn',
                mods: {type: 'useredit', size: 'large'},
              },
              {
                elem: 'text',
                content: 'Изменить',
              },
            ],
          },
        ],
      },
    ],
  }];

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  document.getElementsByClassName('btn_cancel')[0].addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        application.innerHTML = '';
        createUpdateProfile();
        addValidationOnBlur();
      }
  );
}
