import {settings} from './settings/config.js';
import AjaxModule from './ajax.js';
import createMenu from './menu.js';

/**
 * Sign out
 */
export default function doSignOut() {
  const ajax = new AjaxModule();
  ajax.doGet({path: settings.url + '/signout'});

  application.innerHTML = '';
  createMenu();
}
