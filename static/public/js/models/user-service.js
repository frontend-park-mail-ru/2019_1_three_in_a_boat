'use strict';

import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';
import {checkResponse, validateForm} from '../validation.js';

/**
 * @class UserService
 */
export default class UserService extends Model {
  /**
   * Create user object
   */
  constructor() {
    super();
    this.user = null;
    this.event = null;
  }
  /**
   * Get users data from server
   * @return {Promise} promise to get user data
   */
  static getData() {
    return ajax.doGet({path: settings.url + '/'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }
      return response.json().then((data) => {
        return data.user;
      });
    });
  }

  /**
   * Send user data to the server
   * @param {HTMLFormElement} form
   * @param {Object} body
   * @return {Promise}
   */
  static sendData(form, body) {
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
   * Update user data on the server
   * @param {HTMLFormElement} form
   * @param {Object} body
   * @param {int} userId
   * @return {Promise}
   */
  static updateData(form, body, userId) {
    const path = `${settings.url}/users/${userId}`;
    return ajax.doPut({path: path, body})
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
   * @return {Object} input form
   */
  static getFromSignUp(event) {
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
   * Get list of users with pagination
   * @param {string} page
   * @return {Promise<any | never>}
   */
  static getUsers(page) {
    const url = settings.url + '/users?sort=-highscore&page=' + page;

    return ajax.doGet({path: url}).then(
        (response) => {
          if (response.status > 499) {
            alert('Server error');
            return;
          }

          return response.json().then(
              (data) => {
                return JSON.parse(JSON.stringify(data));
              },
              (error) => {
                throw new Error(error);
              });
        },
        (error) => {
          throw new Error(error);
        }
    );
  }

  /**
   * Get user by id. If id == -1 get current user.
   * @param {number} id
   * @return {Promise<any | never>}
   */
  static getUser(id) {
    if (id !== -1) {
      const path = settings.url + '/users/' + id;

      return ajax.doGet({path}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }

        return response.json().then((data) => {
          data.data.isCurrent = !data.user === null
              && data.data.uid === data.user.uid;
          return data.data;
        },
        (error) => {
          throw new Error(error);
        });
      });
    } else {
      return ajax.doGet({path: settings.url + '/'}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }

        return response.json().then((data) => {
          data.user.isCurrent = true;
          return data.user;
        },
        (error) => {
          throw new Error(error);
        });
      });
    }
  }
};