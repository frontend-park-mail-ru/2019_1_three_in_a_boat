'use strict';

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
   */
  constructor(path, onMsg) {
    const Socket = 'MozWebSocket' in window ? MozWebSocket : WebSocket;
    this.ws = new Socket(SERVER_ADDRESS + path);

    this.ws.onerror = (event) => {
      console.log('WebSocket ERROR: ' + JSON.stringify(event, null, 4));
      this._makeNotify('WebSocket ERROR: '
          + JSON.stringify(event, null, 4));
    };

    this.ws.onclose = (event) => {
      this.onDisconnected('Client disconnected.');
    };

    this.ws.onopen = () => {
      console.log('ws success connected');
      this.ws.onmessage = onMsg;
    };
  }

  /**
   * Disconnection handler
   * @param {string} discMsg
   */
  onDisconnected(discMsg) {
    this._makeNotify(discMsg);
  }

  /**
   * Send angel to server
   * @param {*} data
   */
  sendData(data) {
    this.ws.send(data);
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
