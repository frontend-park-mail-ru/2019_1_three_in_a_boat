'use strict';

import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';
import {checkResponse, validateForm} from '../validation.js';

/**
 * @class UserModel
 */
export default class UserModel extends Model {
  /**
   * Create user oblject
   */
  constructor() {
    super();
    this.user = null;
    this.event = null;
  }
  /**
   * Get users data
   * @return {Promise} promise to get user data
   */
  getData() {
    if (!this.user) {
      return ajax.doGet({path: settings.url + '/'}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }
        return response.json().then((data) => {
          this.user = data;
          return data.user;
        });
      });
    }
    return new Promise(() => null);
  }

  /**
   * Send user data to server
   * @param {event.target} form
   * @return {Promise}
   */
  sendData(form, body) {
    // По идее надо бы сделать на каждый урл свой метод
    let path = '';
    if (form.id === 'loginForm') {
      path = '/signin';
    } else if (form.id === 'signup-form') {
      path = '/users';
    } else {
      path = '/signout';
    }
    return ajax.doPost({path: settings.url + path, body})
        .then((response) => {
          if (response.status > 499) {
            alert('Server error');
            return;
          }

          return response.json().then((data) => checkResponse(data, form) );
        });
  }

  /**
   * Get data from input form on sign up page
   * @param {event} event
   * @return {{date: string, lastName: *, password: *,
   * name: *, userName: *, email: *}} input form
   */
  getFromSignUp(event) {
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

    return {userName, password, name, lastName, email, date};
  }

  /**
   * Get data from user input on login page
   * @param {event} event
   * @return {{password: *, name: *}}
   */
  static getFormLogin(event) {
    const form = event.target;
    const name = form.elements['email'].value;
    const password = form.elements['password'].value;
    return {name, password};
  }

  /**
   * Create user authentication
   */
  login() {}
};
