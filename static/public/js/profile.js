import createHeader from './header.js';
import createUpdateProfile from './update.js';
import {addValidationOnBlur} from './validation.js';
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
    path: 'http://127.0.0.1:3000/',
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
        block: 'icon-bg',
        mods: {
          bg: 'borderless', size: 'xxxlarge', shape: 'round',
          color: 'muted-light',
        },
        wrappedInside: 'profile-popup',
        wrappedAs: 'profile-icon',
        content: [
          {
            tag: 'span',
            block: 'profile-popup',
            elem: 'userpic-text',
            content: ['ИИ'],
          },
        ],
      },
      {
        block: 'profile-info',
        wrappedInside: 'profile-popup',
        content: [
          {
            elem: 'item',
            name: 'Никнейм',
            value: user.nickname,
          },
          {
            elem: 'item',
            name: 'Имя',
            value: user.firstName === ''? '-': user.firstName,
          },
          {
            elem: 'item',
            name: 'Фамилия',
            value: user.lastName === ''? '-': user.lastName,
          },
          {
            elem: 'item',
            name: 'Email',
            value: user.email,
          },
          {
            elem: 'item',
            name: 'Дата рождения',
            value: user.date === ''? '-': user.date,
          },
          {
            elem: 'item',
            name: 'Пол',
            value: user.gender === ''? '-': user.gender,
          },
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
