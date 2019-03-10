import {settings} from './settings/config.js';
import AjaxModule from './ajax.js';

/**
 * Call callbackTrue if current user is authorised otherwise call callbackFalse
 * @param {function} callbackTrue
 * @param {function} callbackFalse
 */
export default function checkAuth(callbackTrue, callbackFalse) {
  const ajax = new AjaxModule();
  ajax.doGet({
    callback(xhr) {
      const data = JSON.parse(xhr.responseText);
      if (data.user !== null) {
        callbackTrue();
      } else {
        callbackFalse();
      }
    },
    path: settings.url + '/',
  });
}

