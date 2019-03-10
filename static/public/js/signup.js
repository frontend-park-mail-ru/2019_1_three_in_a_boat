import createHeader from './header.js';
import createMenu from './menu.js';
import ajax from './ajax.js';
import {validateForm, checkResponse} from './validation.js';
import {settings} from './settings/config.js';
import createProfile from './profile.js';
import template from './views-templates/signup-template.js';


/**
 * Create SignUp page
 */
export default function createSignUp() {
  createHeader();
  const templ = template();
  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(templ));

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

    const name = form['signup-form_firstName'].value;
    const lastName = form['signup-form_lastName'].value;
    const email = form['signup-form_email'].value;
    const userName = form['signup-form_username'].value;

    const selectField = document.getElementsByTagName('select');
    const day = selectField['signup-form_selectDay'].value;
    const month = selectField['signup-form_selectMonth'].value;
    const year = selectField['signup-form_selectYear'].value;
    const date = `${day}-${month}-${year}`;

    const password = form['signup-form_password'].value;

    const body = {userName, password, name, lastName, email, date};

    ajax.doPost({path: settings.url + '/users', body}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        const ok = checkResponse(data, form);
        if (ok) {
          application.innerHTML = '';
          createProfile();
        }
      });
    });
  });
};

