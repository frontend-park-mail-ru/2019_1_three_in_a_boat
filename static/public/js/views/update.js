import createHeader from './header.js';
import {createProfile} from './profile-view.js';
import ajax from '../ajax.js';
import {initFileInputs, getBase64, previewFile} from '../file-input.js';
import {settings} from '../settings/config.js';
import {validateForm, checkResponse} from '../validation.js';
import {parseUser} from '../parsing.js';
import getTemplate from './views-templates/update-template.js';
import {addValidationOnBlur} from '../validation.js';
import View from './view.js';

/**
 * @class UpdateView
 */
export default class UpdateView extends View {
  /**
   *
   * @param {HTMLElement}parent
   */
  constructor(parent) {
    super(parent);
    this._user = null;
  }

  /**
   * Get users data
   */
  getUser() {
    ajax.doGet({path: settings.url + '/'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        this._user = parseUser(data.user);
      });
    });
  }

  /**
   * Render update page
   */
  render() {
    if (this._user) {
      const template = getTemplate(this._user);
      document.getElementById('application').insertAdjacentHTML('beforeend',
          bemhtml.apply(template)
      );

      initFileInputs();

      const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
      const cnslHandler = (event) => {
        event.preventDefault();
        removeListeners();
        application.innerHTML = '';
        createProfile();
      };
      cnslBtn.addEventListener('click', cnslHandler);
      events.push({item: cnslBtn, type: 'click', handler: cnslHandler});

      const form = document.getElementById('updateForm');
      const formHandler = submitHandler.bind(null, this._user);
      form.addEventListener('submit', formHandler);
      application.addEventListener('click', clickHandler);
      events.push(
          {item: form, type: 'submit', handler: formHandler},
          {item: application, type: 'click', handler: clickHandler}
      );
      addValidationOnBlur();
    } else {
      this.getUser();
    }
  }
}


// Array for collecting events
const events = [];

/**
 * create Page with Profile Settings
 */
function createUpdateProfile() {
  createHeader();

  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      const user = parseUser(data.user);
      renderUpdateProfilePage(user);
      addValidationOnBlur();
    });
  });
}

/**
 * Render profile's update page
 * @param {Object} user
 */
function renderUpdateProfilePage(user) {
  const template = getTemplate(user);
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  initFileInputs();

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  const cnslHandler = (event) => {
    event.preventDefault();
    removeListeners();
    application.innerHTML = '';
    createProfile();
  };
  cnslBtn.addEventListener('click', cnslHandler);
  events.push({item: cnslBtn, type: 'click', handler: cnslHandler});

  const form = document.getElementById('updateForm');
  const formHandler = submitHandler.bind(null, user);
  form.addEventListener('submit', formHandler);
  application.addEventListener('click', clickHandler);
  events.push(
      {item: form, type: 'submit', handler: formHandler},
      {item: application, type: 'click', handler: clickHandler}
  );
}

/**
 * Event handler for submit button
 * @param {Object} user Current user
 * @param {Event} event
 */
function submitHandler(user, event) {
  event.preventDefault();

  if (!validateForm(event.target)) {
    return;
  }

  const form = event.target;
  const firstName = form['updateForm_firstName'].value;
  const lastName = form['updateForm_lastName'].value;
  const email = form['updateForm_email'].value;
  const selectField = document.getElementsByTagName('select');
  const userName = form['updateForm_username'].value;
  const day = selectField['updateForm_selectDay'].value;
  const month = selectField['updateForm_selectMonth'].value;
  const year = selectField['updateForm_selectYear'].value;
  const gender = selectField['updateForm_selectMale'].value;
  const date = `${day}-${month}-${year}`;
  const password = form['updateForm_password'].value;
  let img = form['updateForm_avatar'].files[0];

  const path = settings.url + '/users/' + user.id;
  const callback = (response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      const ok = checkResponse(data, form);
      if (ok) {
        application.innerHTML = '';
        removeListeners();
        createProfile();
      }
    });
  };

  getBase64(img).then((result) => {
    img = result;
    const body = {
      name: firstName, lastName, userName,
      email, gender, date, password,
      img,
    };

    ajax.doPut({path, body}).then(callback);
  },
  () => {
    const body = {
      name: firstName, lastName, userName,
      email, gender, date, password,
    };

    ajax.doPut({path, body}).then(callback);
  }
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
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}

