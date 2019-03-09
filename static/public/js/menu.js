import createHeader from './header.js';
import checkAuth from './auth.js';

const authedTemplate = [
  {
    href: 'leaders',
    text: 'Лидеры',
    type: 'crown',
  },
  {
    href: 'play',
    text: 'Играть',
    type: 'gamepad',
  },
  {
    href: 'profile',
    text: 'Профиль',
    type: 'user',
  },
  {
    href: 'exit',
    text: 'Выйти',
    type: 'exit',
  },
  {
    href: 'authors',
    text: 'Авторы',
    type: 'users',
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
    href: 'authors',
    text: 'Авторы',
    type: 'users',
  },
  {
    href: 'leaders',
    text: 'Лидеры',
    type: 'crown',
  },
];

/**
 * create Menu page
 */
export default function createMenu() {
  createHeader();

  checkAuth(menuPageDrawer(authedTemplate), menuPageDrawer(unauthedTemplate));
}

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
          block: 'hr',
          mods: {inline: true},
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
