import createHeader from './header.js';
import checkAuth from './auth.js';

const authedTemplate = [
  {
    href: 'profile',
    text: 'Профиль',
    type: 'user',
  },
  {
    href: 'play',
    text: 'Играть',
    type: 'gamepad',
  },
  {
    href: 'leaders',
    text: 'Лидеры',
    type: 'crown',
  },
  {
    href: 'authors',
    text: 'Авторы',
    type: 'users',
  },
  {
    href: 'exit',
    text: 'Выйти',
    type: 'signout',
  },
];

const unauthedTemplate = [
  {
    href: 'signIn',
    text: 'Авторизация',
    type: 'signin',
  },
  {
    href: 'signUp',
    text: 'Регистрация',
    type: 'key',
  },
  {
    href: 'leaders',
    text: 'Лидеры',
    type: 'crown',
  },
  {
    href: 'authors',
    text: 'Авторы',
    type: 'users',
  },
];

/**
 * create Menu page
 */
export default function createMenu() {
  createHeader();

  checkAuth(menuPageDrawer(authedTemplate), menuPageDrawer(unauthedTemplate));
}

/**
 * Get function to render menu with current data
 * @param {Array} data array of menu points
 * @return {Function} function, which drawing menu page with current data
 */
function menuPageDrawer(data) {
  const template = [
    {
      block: 'menu',
      content: [
        {
          block: 'title',
          mods: {large: true},
          content: 'Меню',
          wrappedInside: 'menu',
          wrappedAs: 'title',
        },
        {
          elem: 'items',
          points: data,
        },
      ],
    }];

  return function() {
    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(template)
    );
  };
}
