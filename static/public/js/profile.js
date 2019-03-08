import createHeader from './header.js';
import createUpdateProfile from './update.js';
import createConformWindow from './conform_win.js';

/**
 * Create page with user profile
 */
export default function createProfile() {
  createHeader();

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
            value: 'username',
          },
          {
            elem: 'item',
            name: 'Имя',
            value: 'Иван',
          },
          {
            elem: 'item',
            name: 'Фамилия',
            value: 'Иванов',
          },
          {
            elem: 'item',
            name: 'Email',
            value: 'ivanov.i@mail.ru',
          },
          {
            elem: 'item',
            name: 'Дата рождения',
            value: '15.06.1997',
          },
          {
            elem: 'item',
            name: 'Пол',
            value: 'Мужской',
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
          {
            block: 'btn',
            mods: {'size': 'large', 'with-icon': true, 'color': 'muted'},
            wrappedInside: 'profile-popup',
            content: [
              {
                block: 'icon',
                wrappedInside: 'btn',
                mods: {type: 'delete', size: 'large'},
              },
              {
                elem: 'text',
                content: 'Удалить',
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
      });
  document.getElementsByClassName('btn_color_muted')[0].addEventListener(
      'click',
      (event) => {
        event.preventDefault();
        application.innerHTML = '';
        createConformWindow();
      });
}
