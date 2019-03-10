import createHeader from './header.js';
import createMenu from './menu.js';
import AjaxModule from './ajax.js';
import {validateForm, checkResponse} from './validation.js';
import {settings} from './settings/config.js';
import createProfile from './profile.js';
import template from './views-templates/signup-template.js';

const ajax = new AjaxModule();

/**
 * Create SignUp page
 */
export default function createSignUp() {
  createHeader();

  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createMenu();
  });

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const firstName = form['signup-form_firstName'].value;
    const lastName = form['signup-form_lastName'].value;
    const email = form['signup-form_email'].value;
    const userName = form['signup-form_username'].value;

    const selectField = document.getElementsByTagName('select');
    const day = selectField['signup-form_selectDay'].value;
    const month = selectField['signup-form_selectMonth'].value;
    const year = selectField['signup-form_selectYear'].value;
    const date = `${day}-${month}-${year}`;

    const password = form['signup-form_password'].value;

    const body = {userName, password, firstName, lastName, email, date};

    ajax.doPost({
      callback(xhr) {
        const data = JSON.parse(xhr.responseText);
        const ok = checkResponse(data, form);
        if (ok) {
          application.innerHTML = '';
          createProfile();
        }
      },
      path: settings.url + '/users',
      body,
    });
  });
};

