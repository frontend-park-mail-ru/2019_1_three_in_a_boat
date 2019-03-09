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
      console.log(data.user);
      if (data.user !== null) {
        callbackTrue();
      } else {
        callbackFalse();
      }
    },
    path: 'http://127.0.0.1:3000/',
  });
}

