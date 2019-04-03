'use strict';

import ajax from '../ajax.js';
import {settings} from '../settings/config.js';
import Model from '../core/model.js';

/**
 * @class Author
 */
export default class Author extends Model {
  /**
   * Get list of authors
   * @return {Promise<any | never>}
   */
  getAuthors() {
    return ajax.doGet({path: settings.url + '/authors'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      return response.json().then((data) => data.data);
    },
    (error) => {
      throw new Error(error);
    });
  }
}
