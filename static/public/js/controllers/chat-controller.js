'use strict';

import {settings} from '../settings/config.js';
import Controller from '../core/controller.js';
import ChatView from '../views/chat-view.js';
import WebSocketController from '../controllers/notification-controller.js';

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
      // TODO get usernames
      data.sort((a, b) => a.mid - b.mid);
      data.forEach((msg) => {
        this.view.addMessage(msg.uid, 'UserName', msg.text);
      });
    } else {
      // TODO get username
      this.view.addMessage(data.uid, 'UserName', data.text);
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
