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
    console.log('i am exist');
    super();
  }
  /**
   * Get authors data
   * @return {Promise}
   */
  getData() {
    // return ({user: 'name'});
    return ajax.doGet({path: settings.url + '/authors'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }
      // console.log(response.json());
      // res = response.json();
      console.log('response');
      return response.json();
    });
    // return new Promise((resolve) => resolve(response.json()));
  }
};
