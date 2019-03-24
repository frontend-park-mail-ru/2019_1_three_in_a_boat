import createHeader from './header.js';
import createMenu from './menu.js';
import initInputs from '../input.js';
import ajax from '../ajax.js';
import template from './views-templates/login-template.js';
import {validateForm, checkResponse} from '../validation.js';
import {settings} from '../settings/config.js';

// Array for collecting events
const events = [];

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
  form.addEventListener('submit', submitHandler);
  application.addEventListener('click', clickHandler);
  events.push(
      {item: form, type: 'submit', handler: submitHandler},
      {item: application, type: 'click', handler: clickHandler}
  );
}

/**
 * Calls removeListeners with click on some link
 * @param {Event} event
 */
function clickHandler(event) {
  const link = event.target.closest('[data-link-type]');
  if (link === null) {
    return;
  }
  removeListeners();
}

/**
 * Event handler for submit button
 * @param {Event} event
 */
function submitHandler(event) {
  event.preventDefault();
  if (!validateForm(event.target)) {
    return;
  }
  const form = event.target;
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
        removeListeners();
        application.innerHTML = '';
        createMenu();
      }
    });
  });
}

/**
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}
