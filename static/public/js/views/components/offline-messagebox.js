'use strict';

const bemhtml = require('../../bundle.bemhtml.js').bemhtml;

/**
 * Render message about using online feature without internet
 * @param {HTMLElement} parent
 */
export default function showMessage(parent) {
  const template = [
    {
      block: 'offline-msg',
      content: {
        elem: 'window',
        content: [
          {
            elem: 'text',
            content: 'Мы не можем сделать для вас это ' +
              'без интернет-соединения :С',
          },
          {
            elem: 'btn',
            attrs: {'href': '#'},
            tag: 'a',
            content: 'Назад',
          },
        ],
      },
    },
  ];

  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const btn = parent.getElementsByClassName('offline-msg__btn')[0];
  btn.onclick = () => {
    const offlineMsg = parent.getElementsByClassName('offline-msg')[0];
    parent.removeChild(offlineMsg);
    window.history.back();
  };
}
