'use strict';

import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

const authedTemplate = [
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
    href: 'single',
    text: 'Играть',
    type: 'gamepad',
  },
  {
    href: 'signin',
    text: 'Авторизация',
    type: 'signin',
  },
  {
    href: 'signup',
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
   * @param {JSON} user data
   */
  render(user) {
    if (!user) {
      this.menuPageDrawer(unauthedTemplate);
    } else {
      this.menuPageDrawer(authedTemplate);
    }
  }

  /**
   * Get function to render menu with current data
   * @param {Array} data array of menu points
   */
  menuPageDrawer(data) {
    const template = [
      {
        block: 'menu',
        content: [
          {
            elem: 'items',
            points: data,
          },
        ],
      },
      {
        block: 'small-chat',
        content: [
          {
            elem: 'btn',
            type: 'mail',
            // content: [{
            //   elem: 'notify',
            //   content: 1,
            // }],
          },
        ],
      },
    ];
    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  }
}
