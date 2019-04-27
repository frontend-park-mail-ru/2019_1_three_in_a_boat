import {settings} from '../settings/config.js';
import View from '../core/view.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class ChatView
 */
export default class ChatView extends View {
  /**
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Scroll messages to the last message
   * @private
   */
  _scrollDown() {
    const items = document.getElementsByClassName('chat__items')[0];
    items.scrollTop = items.scrollHeight;
  }

  /**
   * Add new message
   * @param {number} id
   * @param {string} nickname
   * @param {string} msg
   */
  addMessage(id, nickname, msg) {
    const items = document.getElementsByClassName('chat__items')[0];
    const template = [{
      block: 'chat',
      elem: 'item',
      content: [
        {
          elem: 'msg-data',
          content: [
            {
              elem: 'link',
              tag: 'a',
              fieldName: 'userName',
              value: id,
              attrs: {value: id}, // to be changed once api's here
              content: [
                {
                  elem: 'data-field',
                  content: [
                    {
                      elem: 'username',
                      content: nickname + ':',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elem: 'text',
          content: msg,
        },
      ],
    }];

    items.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    this._scrollDown();
  }

  addMessageToEnd(id, nickname, msg) {
    const items = document.getElementsByClassName('chat__items')[0];
    const template = [{
      block: 'chat',
      elem: 'item',
      content: [
        {
          elem: 'msg-data',
          content: [
            {
              elem: 'link',
              tag: 'a',
              fieldName: 'userName',
              value: id,
              attrs: {value: id}, // to be changed once api's here
              content: [
                {
                  elem: 'data-field',
                  content: [
                    {
                      elem: 'username',
                      content: nickname + ':',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          elem: 'text',
          content: msg,
        },
      ],
    }];

    items.insertAdjacentHTML('afterBegin', bemhtml.apply(template));
  }

  /**
   * create Page with Authors
   */
  render() {
    const draw = [
      {
        block: 'chat',
        mods: {main: true},
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
            messages: [],
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
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    this._scrollDown();
  }
}