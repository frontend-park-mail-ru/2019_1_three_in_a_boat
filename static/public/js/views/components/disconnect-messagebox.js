'use strict';

const bemhtml = require('../../bundle.bemhtml.js').bemhtml;

/**
 * Render message about using online feature without internet
 * @param {HTMLElement} parent
 * @param {boolean} reconnect - is reconnect allowed
 * @param {string} recPage - page to reconnect
 */
export default function showMessage(parent, reconnect=false, recPage='') {
  const template = [
    {
      block: 'offline-msg',
      content: {
        elem: 'window',
        content: [
          {
            elem: 'text',
            content: 'Соединение с сервером разорвано',
          },
          !reconnect ? {} : {
            elem: 'btn',
            attrs: {'href': '#'},
            tag: 'a',
            content: 'Переподключиться',
          },
          {
            elem: 'btn',
            attrs: {'href': '#'},
            tag: 'a',
            content: 'В меню',
          },
        ],
      },
    },
  ];

  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const buttons = parent.getElementsByClassName('offline-msg__btn');
  const menuBtn = reconnect ? buttons[1] : buttons[0];
  menuBtn.onclick = () => {
    const offlineMsg = parent.getElementsByClassName('offline-msg')[0];
    parent.removeChild(offlineMsg);
    window.history.pushState({}, '', '/');
    window.history.pushState({}, '', '/');
    window.history.back();
  };

  if (reconnect) {
    const recBtn = buttons[0];
    recBtn.onclick = () => {
      const offlineMsg = parent.getElementsByClassName('offline-msg')[0];
      parent.removeChild(offlineMsg);
      window.history.pushState({}, '', recPage);
      window.history.pushState({}, '', recPage);
      window.history.back();
    };
  }
}
