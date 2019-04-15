'use strict';

import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';
import {checkResponse} from '../validation.js';

/**
 * @class UserService
 */
export default class UserService extends Model {
  /**
   * Create user object
   */
  constructor() {
    super();
    this.user = undefined;
    this.event = null;
  }
  /**
   * Get users data from server
   * @return {Promise} promise to get user data
   */
  static getData() {
    if (this.user) {
      return new Promise((resolve) => {
        resolve(this.user);
      });
    }

    return ajax.doGet({path: settings.url + '/'}).then((response) => {
      if (response.status > 499) {
        return undefined; // TODO show message here
      }
      return response.json().then((data) => {
        this.user = data.user;
        if (this.user !== null) {
          this.user.isCurrent = true;
        }
        return data.user;
      });
    },
    (error) => {
      return undefined;
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
            throw new Error('Server error');
          }

          return response.json().then((data) => checkResponse(data, form) );
        });
  }

  /**
   * Send user data to the server
   * @param {HTMLFormElement} form
   * @param {Object} body
   * @return {Promise}
   */
  static singout() {
    const path = settings.url + '/signout';

    return ajax.doPost({path: path})
        .then((response) => {
          if (response.status > 499) {
            throw new Error('Server error');
          }

          this.user = undefined;
          return response.json().then(() => true);
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
            throw new Error('Server error');
          }
          return response.json().then((data) => {
            if (checkResponse(data, form)) {
              this.user = undefined;
              return true;
            } else {
              return false;
            }
          });
        });
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
            throw new Error('Server error');
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
          throw new Error('Server error');
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
      if (this.user) {
        return new Promise((resolve) => {
          resolve(this.user);
        });
      }

      return ajax.doGet({path: settings.url + '/'}).then((response) => {
        if (response.status > 499) {
          throw new Error('Server error');
        }

        return response.json().then((data) => {
          data.user.isCurrent = true;
          this.user = data.user;
          return data.user;
        },
        (error) => {
          throw new Error(error);
        });
      });
    }
  }
};
