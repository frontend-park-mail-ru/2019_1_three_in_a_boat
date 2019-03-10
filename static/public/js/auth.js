import {settings} from './settings/config.js';
import ajax from './ajax.js';

/**
 * Call callbackTrue if current user is authorised otherwise call callbackFalse
 * @param {function} callbackTrue
 * @param {function} callbackFalse
 */
export default function checkAuth(callbackTrue, callbackFalse) {
  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      if (data.user !== null) {
        callbackTrue();
      } else {
        callbackFalse();
      }
    });
  });
}

