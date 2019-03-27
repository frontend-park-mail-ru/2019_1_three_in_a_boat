'use strict';

import Controller from '../core/controller.js';
import AuthorsView from '../views/authors.js';
import AuthorsModel from '../models/author.js';

/**
 * @class AuthorsController
 */
export default class AuthorsController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.authors = null;
    this.model = new AuthorsModel();
    this.view = new AuthorsView(parent);
  }
  /**
   * Create action
   */
  action() {
    this.model.getData().then((data) => {
      this.view.render(data);
    });
  }
};
