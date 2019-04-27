'use strict';

import events from '../game/core/events.js';
import bus from '../event-bus.js';
import showDiscMessage from '../views/components/disconnect-messagebox.js';
import {settings} from '../settings/config.js';

const SERVER_ADDRESS = settings.wsUrl; // 'ws://localhost:3000/ws';

/**
 * The singleton class for sending and receiving messages from server
 * @class NotificationController
 */
export default class NotificationController {
  /**
   * Constructor
   * @param {string} path
   * @param {function} onMsg
   * @param {function} onClose
   * @param {string} url websocket url
   */
  constructor(path, onMsg, onClose= () => {}, url=SERVER_ADDRESS) {
    const Socket = 'MozWebSocket' in window ? MozWebSocket : WebSocket;
    console.log(url);
    this.ws = new Socket(url + path);

    this.ws.onerror = (event) => {
      console.log('WebSocket ERROR: ' + JSON.stringify(event, null, 4));
    };

    this.ws.onclose = () => {
      onClose();
    };

    this.ws.onopen = () => {
      this.ws.onmessage = onMsg;
    };
  }

  /**
   * Send angel to server
   * @param {*} data
   */
  sendData(data) {
    this.ws.send(data);
  }

  /**
   * Close connection
   */
  close() {
    this.ws.close();
  }

  /**
   * Says the client information about connection
   * @param {string} data
   * @private
   */
  _makeNotify(data = 'error') {
    if (!'Notification' in window) {
      console.error('haven`t Notification in window');
      return;
    }

    if (Notification.permission === 'granted') {
      new Notification(data);
      return;
    }

    if (Notification.permission !== 'denied') {
      Notification
          .requestPermission()
          .then((permission) => {
            if (permission === 'granted') {
              new Notification(data);
            }
          });
    }
  }
}
