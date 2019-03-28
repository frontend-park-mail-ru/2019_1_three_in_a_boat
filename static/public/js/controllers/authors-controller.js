'use strict';

import Controller from '../core/controller.js';
import AuthorsModel from '../models/authors-model.js';
import AuthorsView from '../views/authors-view.js';

/**
 * @class AuthorsController
 */
export default class AuthorsController extends Controller {
  /**
   * Construct obj AuthorsController
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.model = new AuthorsModel();
    this.view = new AuthorsView(parent);
    this.authors = null;
  }

  /**
   * Get authors and call AuthorsView rendering
   */
  action() {
    if (!this.authors) {
      console.log('aaaaaaaa');
      console.log(this.model);
      this.model.getData()
          .then((data) => {
            console.log('promise');
            this.view.render(data['data']);
            this.authors = data['data'];
          });
    } else {
      this.view.render(this.authors);
    }
  }
};
