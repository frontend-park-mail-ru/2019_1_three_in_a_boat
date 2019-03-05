import createHeader from './header.js';

/**
 *
 */
export default function createMenu() {
  createHeader();

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
          points: [
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
          ],
        },
      ],
    }];

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );
}
