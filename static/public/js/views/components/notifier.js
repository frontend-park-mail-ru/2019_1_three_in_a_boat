'use strict';

/**
 * //
 * @param {string} data
 */
export default function makeNotify(data = '') {
  if (!'Notification' in window) {
    console.error('not not sup');
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
            return;
          }
        })
  }
}