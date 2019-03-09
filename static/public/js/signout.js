import AjaxModule from './ajax.js';
import createMenu from './menu.js';

/**
 * Sign out
 */
export default function doSignOut() {
  const ajax = new AjaxModule();
  ajax.doGet({path: 'http://127.0.0.1:3000/signout'});

  application.innerHTML = '';
  createMenu();
}
