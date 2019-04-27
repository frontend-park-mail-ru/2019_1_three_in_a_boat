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
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
    this._initWebSocket();
    this._initEvents();
  }

  /**
   * Init events
   * @private
   */
  _initEvents() {
    const btn = this.parent.getElementsByClassName('chat__btn')[0];
    const input = this.parent.getElementsByClassName('chat__input')[0];
    btn.onclick = () => {
      const data = {text: input.value};
      this.ws.sendData(JSON.stringify(data));
    };
  }

  /**
   * Get url args
   * @param {Array} msgs
   * @return {string}
   * @private
   */
  _getUrlArgsForIds(msgs) {
    let args = '';
    msgs.forEach((msg, pos) => {
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
        ajax.doGet({path: settings.url + '/users/chat?' + args}).then((result) => {
          result.json().then((msgsData) => {
            msgsData = msgsData.data.users;
            data.sort((a, b) => a.mid - b.mid);
            data.forEach((msg) => {
              const username = 'uid' in msg ? msgsData.find((item) => {
                return item.uid === msg.uid;
              }).username : 'Анон';
              this.view.addMessage(msg.uid, username, msg.text);
              this.ws.makeNotify(`${username}: \n ${data.text.substring(0, 120)}`);
              // makeNotify(`User ${data.uid} send message:\n ${data.text.substring(0, 120)}`);
            });
          });
        });
      } else {
        data.forEach((msg) => {
          data.sort((a, b) => a.mid - b.mid);
          this.view.addMessage(0, 'Анон', msg.text);
          this.ws.makeNotify(`Аноним:\n ${data.text.substring(0, 120)}`);
        });
      }
    } else if ('text' in data) {
      if ('uid' in data) {
        ajax.doGet({path: settings.url + '/users/chat?ids=' + data.uid}).then((result) => {
          result.json().then((msgsData) => {
            msgsData = msgsData.data.users[0];
            this.ws.makeNotify(`${msgsData.username}: \n ${data.text.substring(0, 120)}`);
            this.view.addMessage(data.uid, msgsData.username, data.text);
          });
        });
      } else {
        this.ws.makeNotify(`Аноним: ${data.text.substring(0, 120)}`);
        this.view.addMessage(data.uid, 'Анон', data.text);

      }
    }
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
