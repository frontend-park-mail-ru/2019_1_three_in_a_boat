'use strict';

import showSmallChat from './small-chat.js';

const bemhtml = require('../../bundle.bemhtml.js').bemhtml;

/**
 * Render message button
 * @param {HTMLElement} parent
 */
export default function showChatButton(parent) {
  const template = [
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

  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const button = parent.getElementsByClassName('small-chat');
  const renderBtn = button[0];
  renderBtn.onclick = () => {
    parent.removeChild(button[0]);
    showSmallChat(parent);
  };
}
