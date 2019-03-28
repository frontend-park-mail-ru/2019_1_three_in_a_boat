'use strict';
import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';

/**
 * @class MenuModel
 */
export default class MenuModel extends Model {
  /**
   * Get data about user authorization
   * @return {Promise} promise to get user data
   */
  getData() {
    return ajax.doGet({path: settings.url + '/'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }
      response.json().then((data) => data.user );
    });
  }
};
