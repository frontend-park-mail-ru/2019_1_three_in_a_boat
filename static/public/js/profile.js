import createHeader from './header.js';
import createUpdateProfile from './update.js';
import {addValidationOnBlur} from './validation.js';
import {settings} from './settings/config.js';
import {parseUser} from './parsing.js';
import ajax from './ajax.js';
import getTemplate from './views-templates/profile-template.js';

/**
 * Create page with user profile
 */
export default function createProfile() {
  createHeader();

  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      const user = parseUser(data.user);
      renderProfile(user);
    });
  });
}

/**
 * Render profile page
 * @param {Object} user
 */
export function renderProfile(user) {
  return getTemplate(user).then((template) => {
    const apllication = document.getElementById('application');
    apllication.insertAdjacentHTML('beforeend', bemhtml.apply(template));

    document.getElementsByClassName('btn_cancel')[0].addEventListener(
        'click',
        (event) => {
          event.preventDefault();
          application.innerHTML = '';
          createUpdateProfile();
          addValidationOnBlur();
        }
    );
  });
}
