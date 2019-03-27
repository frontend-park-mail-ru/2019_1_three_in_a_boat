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
}
