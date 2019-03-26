'use strict';

import Model from '../core/model.js';
import ajax from '../ajax.js';
import {settings} from '../settings/config.js';

/**
 * @class AuthorsModel
 */
export default class AuthorsModel extends Model {
  /**
   * Get authors data
   * @return {JSON}
   */
  getData() {
    ajax.doGet({path: settings.url + '/authors'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => JSON.parse(JSON.stringify(data['data'])));
    });
  }
};
