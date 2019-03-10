import createHeader from './header.js';
import createUpdateProfile from './update.js';
import {addValidationOnBlur} from './validation.js';
import {settings} from './settings/config.js';
import {parseUser} from './parsing.js';
import AjaxModule from './ajax.js';
import getTemplate from './views-templates/profile-template.js';

/**
 * Create page with user profile
 */
export default function createProfile() {
  createHeader();
  const ajax = new AjaxModule();
  ajax.doGet({
    callback(xhr) {
      const data = JSON.parse(xhr.responseText);
      const user = parseUser(data.user);
      renderProfile(user);
    },
    path: settings.url+ '/',
  });
}

/**
 * Render profile page
 * @param {Object} user
 */
function renderProfile(user) {
  const template = getTemplate(user);

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
}
