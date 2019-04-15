// 'use strict';
//
// // import {settings} from '../settings/config.js';
// import GameController from '../controllers/game-controller.js';
//
// const singleton = Symbol();
// const singletonEnforcer = Symbol();
// const SERVER_ADDRESS = 'ws://localhost:3000/ws';
//
// /**
//  * The singleton class for sending and receiving messages from server
//  * @class NotificationController
//  */
// class NotificationController {
//   /**
//    * construct singleton
//    * @param {Object} enforcer
//    */
//   constructor(enforcer) {
//     if (enforcer !== singletonEnforcer) {
//       throw Error('Instantiation failed: ' +
//           'use NotificationController.getInstance() instead of new.');
//     }
//     const Socket = 'MozWebSocket' in window ? MozWebSocket : WebSocket;
//     this.ws = new Socket(SERVER_ADDRESS);
//
//     this.ws.onerror = (event) => {
//       console.log('WebSocket ERROR: ' + JSON.stringify(errorEvent, null, 4));
//       this._makeNotify('WebSocket ERROR: '
//           + JSON.stringify(errorEvent, null, 4));
//     };
//
//     this.ws.onclose = (event) => {
//       this.onDisconnected('Client disconnected.');
//     };
//
//     this.ws.onopen = () => {
//       console.log('ws success connected');
//       this.ws.onmessage = (event) => {
//         GameController.selectAction(event);
//       };
//     };
//   }
//
//   /**
//    * Get instance of object
//    * @return {*}
//    * @constructor
//    */
//   static get Instance() {
//     if (!this[singleton]) {
//       this[singleton] = new NotificationController(singletonEnforcer);
//     }
//     return this[singleton];
//   }
//
//   /**
//    *
//    * @param {Object} v
//    * @constructor
//    */
//   static set Instance(v) {
//     throw Error('Can\'t change constant property!');
//   }
//
//   /**
//    * Disconnection handler
//    * @param {string} discMsg
//    */
//   onDisconnected(discMsg) {
//     this._makeNotify(discMsg);
//   }
//
//   /**
//    * Send angel to server
//    * @param {Number} rad
//    */
//   sendAngel(rad) {
//     const data = {angle: rad};
//     this[singleton].send(data);
//   }
//
//   /**
//    * Says the client information about connection
//    * @param {string} data
//    * @private
//    */
//   _makeNotify(data = 'error') {
//     if (!'Notification' in window) {
//       console.error('haven`t Notification in window');
//       return;
//     }
//
//     if (Notification.permission === 'granted') {
//       new Notification(data);
//       return;
//     }
//
//     if (Notification.permission !== 'denied') {
//       Notification
//           .requestPermission()
//           .then((permission) => {
//             if (permission === 'granted') {
//               new Notification(data);
//             }
//           });
//     }
//   }
// }
//
// // const singleton = new NotificationController();
// export default NotificationController;
