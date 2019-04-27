'use strict';

import showChatButton from './chat-button.js';
const bemhtml = require('../../bundle.bemhtml.js').bemhtml;

/**
 * Render small chat
 * @param {HTMLElement} parent
 */
export default function showSmallChat(parent) {
  const template = [
    {
      block: 'small-chat',
      mods: {open: true},
      content: [
        {
          block: 'chat',
          content: [
            {
              elem: 'header',
              content: 'Чат',
            },
            { // TODO close_icon
              block: 'icon',
              tag: 'a',
              wrappedInside: 'chat',
              wrappedAs: 'close-popup',
              mods: {
                size: 'large',
                color: 'black',
                btn: true,
                type: 'cross',
              },
              attrs: {
                'data-link-type': '/',
              },
            },
            {
              elem: 'items',
              messages: [''],
            },
            {
              elem: 'form',
              content: [
                {
                  tag: 'textarea',
                  elem: 'input',
                  attrs: {placeholder: 'Введите сообщение', type: 'text'},
                },
                {
                  attrs: {type: 'submit'},
                  block: 'btn',
                  wrappedInside: 'chat',
                  wrappedAs: 'btn',
                  content: [{
                    block: 'btn',
                    elem: 'inner',
                    content: [{
                      block: 'btn',
                      elem: 'text',
                      elemMods: {'normal': true},
                      content: 'Отправить',
                    }],
                  }],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const button = parent.getElementsByClassName('icon_type_cross');
  const closeBtn = button[0];
  const chatBlock = parent.getElementsByClassName('chat')[0];
  closeBtn.onclick = () => {
    parent.removeChild(chatBlock);
    showChatButton(parent);
  };
}
