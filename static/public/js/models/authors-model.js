'use strict';

import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';

/**
 * @class AuthorsModel
 */
export default class AuthorsModel extends Model {
  /**
   * Create authors object
   */
  constructor() {
    super();
  }
  /**
   * Get authors data
   * @return {Promise}
   */
  getData() {
    return ajax.doGet({path: settings.url + '/authors'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }
      return response.json();
    });
  }
};
