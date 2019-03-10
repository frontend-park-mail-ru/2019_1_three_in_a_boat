import createHeader from './header.js';
import createMenu from './menu.js';
import AjaxModule from './ajax.js';
import template from './views-templates/login-template.js';
import {validateForm, checkResponse} from './validation.js';
import {settings} from './settings/config.js';

const ajax = new AjaxModule();

/**
 * Create login page
 */
export default function createLoginPage() {
  createHeader();

  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    ajax.doPost({
      callback(xhr) {
        const data = JSON.parse(xhr.responseText);
        const ok = checkResponse(data, form);
        if (ok) {
          application.innerHTML = '';
          createMenu();
        }
      },
      path: settings.url + '/signin',
      body: {
        name: email,
        password: password,
      },
    });
  });
}
