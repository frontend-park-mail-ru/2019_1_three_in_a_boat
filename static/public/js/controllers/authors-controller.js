'use strict';

import Controller from '../core/controller.js';
import AuthorsView from '../views/authors-view.js';
import Author from '../models/author.js';

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
    this.model = new Author();
    this.view = new AuthorsView(parent);
  }
  /**
   * Create action
   */
  action() {
    this.model.getAuthors().then(
        (data) => {
          this.view.render(data);
        },
        (error) => console.log(error)); // TODO show 5** err mb
  }
};
