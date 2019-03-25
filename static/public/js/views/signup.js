import createHeader from './header.js';
import createMenu from './menu.js';
import ajax from '../ajax.js';
import {validateForm, checkResponse} from '../validation.js';
import {settings} from '../settings/config.js';
import {createProfile} from './profile.js';
import template from './views-templates/signup-template.js';
import View from './view.js';

/**
 * @class SignUpView
 */
export default class SignUpView extends View {
  /**
   *
   * @param {HTMLElement}parent
   */
  constructor(parent) {
    console.log('Create signUpView');
    super(parent);
  }

  /**
   * Render SignUp page
   */
  render() {
    console.log('Render signUpView');
    const draw = template();
    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
    const cnslHandler = (event) => {
      event.preventDefault();
      removeListeners();
      application.innerHTML = '';
      // createMenu();
    };
    const cnslBtn = this.parent.getElementsByClassName('btn_color_muted')[0];
    cnslBtn.addEventListener('click', cnslHandler);
    const form = document.getElementById('signup-form');
    console.log(cnslBtn, form);
    form.addEventListener('submit', submitHandler);
    // application.addEventListener('click', clickHandler);
    events.push(
        {item: form, type: 'submit', handler: submitHandler},
        {item: application, type: 'click', handler: clickHandler},
        {item: cnslBtn, type: 'click', handler: cnslHandler},
    );
  }
}


// Array for collecting events
const events = [];

/**
 * Create SignUp page
 */
export function createSignUp() {
  createHeader();
  const templ = template();
  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(templ));

  const cnslHandler = (event) => {
    event.preventDefault();
    removeListeners();
    application.innerHTML = '';
    createMenu();
  };
  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', cnslHandler);

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', submitHandler);
  application.addEventListener('click', clickHandler);
  events.push(
      {item: form, type: 'submit', handler: submitHandler},
      {item: application, type: 'click', handler: clickHandler},
      {item: cnslBtn, type: 'click', handler: cnslHandler},
  );
};

/**
 * Event handler for submit button
 * @param {Event} event
 */
function submitHandler(event) {
  console.log('submitHandler is launch');
  event.preventDefault();

  if (!validateForm(event.target)) {
    return;
  }

  const form = document.getElementById('signup-form');

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
        removeListeners();
        application.innerHTML = '';
        createProfile();
      }
    });
  });
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
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}
