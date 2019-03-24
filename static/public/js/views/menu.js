import checkAuth from '../auth.js';
import View from './view.js';

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
 * @class MenuView
 */
export default class MenuView extends View {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }
  /**
   * create Menu page
   */
  render() {
    checkAuth(this.menuPageDrawer(authedTemplate),
        this.menuPageDrawer(unauthedTemplate));
  }

  /**
   * Get function to render menu with current data
   * @param {Array} data array of menu points
   * @return {Function} function, which drawing menu page with current data
   */
  menuPageDrawer(data) {
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

    return () => {
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    };
  }
}
