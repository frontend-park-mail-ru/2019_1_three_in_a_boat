'use strict';

import {settings} from '../settings/config.js';
import Controller from '../core/controller.js';
import ChatView from '../views/chat-view.js';
import WebSocketController from '../controllers/notification-controller.js';
import makeNotify from '../views/components/notifier.js';
import ajax from '../ajax.js';

/**
 * @class ChatController
 */
export default class ChatController extends Controller {
  /**
   * Construct obj ChatController
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new ChatView(parent);
    this.minId = undefined;
  }

  /**
   * Destructor
   */
  destructor() {
    super.destructor();
    this.ws.close();
    this.minId = undefined;
  }

  /**
   * Create action
   */
  action() {
    this.view.render();
    this._initWebSocket();
    this._initEvents();
    this._initScroll();
  }

  /**
   * Init events
   * @private
   */
  _initEvents() {
    const btn = this.parent.getElementsByClassName('chat__btn')[0];
    const input = this.parent.getElementsByClassName('chat__input')[0];
    btn.onclick = () => {
      const text = input.value.trim();
      if (text === '') {
        return;
      }
      const data = {text};
      this.ws.sendData(JSON.stringify(data));
      input.value = '';
    };
  }

  /**
   * Get url args
   * @param {Array} messages
   * @return {string}
   * @private
   */
  _getUrlArgsForIds(messages) {
    let args = '';
    messages.forEach((msg) => {
      if ('uid' in msg) {
        if (args.length > 0) {
          args += '&';
        }
        args += 'ids=' + msg.uid;
      }
    });

    return args;
  }

  /**
   * Get new messages
   * @param {object} message
   * @private
   */
  _getMessages(message) {
    let data;
    try {
      data = JSON.parse(message.data);
    } catch (e) {
      return;
    }

    if (Array.isArray(data)) {
      const args = this._getUrlArgsForIds(data);
      if (args.length > 0) {
        const path = settings.url + '/users/chat?' + args;
        ajax.doGet({path}).then((result) => {
          result.json().then((messagesData) => {
            messagesData = messagesData.data.users;
            data.sort((a, b) => a.mid - b.mid);
            this.minId = data[0].mid;
            data.forEach((msg) => {
              const username = 'uid' in msg ? messagesData.find((item) => {
                return item.uid === msg.uid;
              }).username : 'Анон';
              this.view.addMessage(msg.uid, username, msg.text, true);
            });
          });
        });
      } else {
        data.forEach((msg) => {
          data.sort((a, b) => a.mid - b.mid);
          this.minId = data[0].mid;
          this.view.addMessage(0, 'Анон', msg.text, true);
        });
      }
    } else if ('text' in data) {
      if ('uid' in data) {
        const path = settings.url + '/users/chat?ids=' + data.uid;
        ajax.doGet({path}).then((result) => {
          result.json().then((msgsData) => {
            msgsData = msgsData.data.users[0];
            const notification = msgsData.username + '\n'
              + data.text.substring(0, 120);
            this.ws.makeNotify(notification);
            this.view.addMessage(data.uid, msgsData.username, data.text, true);
          });
        });
      } else {
        this.ws.makeNotify(`Аноним: ${data.text.substring(0, 120)}`);
        this.view.addMessage(data.uid, 'Анон', data.text, true);
      }
    }
  }

  /**
   * Init scroll events
   * @private
   */
  _initScroll() {
    const items = this.parent.getElementsByClassName('chat__items')[0];
    items.onscroll = () => {
      if (items.scrollTop <= 0) {
        const path = settings.chatUrl + '/chat/paginate?msgId=' + this.minId;
        ajax.doGet({path}).then((result) => {
          result.json().then((data) => {
            data = data.data;
            const args = this._getUrlArgsForIds(data);

            if (args.length > 0) {
              const path = settings.url + '/users/chat?' + args;
              ajax.doGet({path}).then((result) => {
                result.json().then((messagesData) => {
                  messagesData = messagesData.data.users;
                  data.sort((a, b) => -a.mid + b.mid);
                  this.minId = data[data.length - 1].mid;

                  data.forEach((msg) => {
                    const username = 'uid' in msg ? messagesData.find(
                        (item) => {
                          return item.uid === msg.uid;
                        }).username : 'Анон';
                    this.view.addMessage(msg.uid, username, msg.text, false);
                  });
                });
              });
            } else {
              data.sort((a, b) => -a.mid + b.mid);
              this.minId = data[data.length - 1].mid;

              data.forEach((msg) => {
                this.view.addMessage(0, 'Анон', msg.text, false);
              });
            }
          });
        });
      }
    };
  }

  /**
   * Init websocket connection
   * @private
   */
  _initWebSocket() {
    this.ws = new WebSocketController('/chat', this._getMessages.bind(this),
        () => {}, settings.wsUrl + settings.chatPort);
  }
};
