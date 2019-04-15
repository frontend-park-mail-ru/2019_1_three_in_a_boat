'use strict';

import Controller from '../core/controller.js';
import PageNotFoundView from '../views/page-not-found-view.js';

/**
 * @class NotFoundController
 */
export default class NotFoundController extends Controller {
  /**
   * Construct obj AuthorsController
   * @param {HTMLElement} parent
   */
  constructor() {
    const main = document.getElementById('main');
    super(main, false);
    this.view = new PageNotFoundView(main);
  }
  /**
   * Create action
   */
  action() {
    this.view.render();
  }
};
