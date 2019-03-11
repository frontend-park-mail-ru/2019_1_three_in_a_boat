import createHeader from './header.js';
import createMenu from './menu.js';
import initInputs from './input.js';
import ajax from './ajax.js';
import template from './views-templates/login-template.js';
import {validateForm, checkResponse} from './validation.js';
import {settings} from './settings/config.js';

/**
 * Create login page
 */
export default function createLoginPage() {
  createHeader();
  const templ = template();

  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(templ));

  initInputs();
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const name = form.elements['email'].value;
    const password = form.elements['password'].value;

    const body = {name, password};
    ajax.doPost({path: settings.url + '/signin', body}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        const ok = checkResponse(data, form);
        if (ok) {
          application.innerHTML = '';
          createMenu();
        }
      });
    });
  });
}
