'use strict';

import ajax from '../ajax.js';
import {settings} from '../settings/config.js';
import Model from '../core/model.js';

/**
 * @class User
 */
export default class User extends Model {
  /**
   * Get list of users with pagination
   * @param {string} page
   * @return {Promise<any | never>}
   */
  getUsers(page) {
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
  getUser(id) {
    if (id !== -1) {
      const path = settings.url + '/users/' + id;

      return ajax.doGet({path}).then((response) => {
        if (response.status > 499) {
          alert('Server error');
          return;
        }

        return response.json().then((data) => {
          data.data.isCurrent = data.data.uid === data.user.uid;
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
}
