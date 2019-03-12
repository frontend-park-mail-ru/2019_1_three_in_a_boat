import {settings} from './settings/config.js';
import ajax from './ajax.js';
import createMenu from './menu.js';

/**
 * Sign out
 */
export default function doSignOut() {
  ajax.doPost({path: settings.url + '/signout'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    application.innerHTML = '';
    createMenu();
  });
}
