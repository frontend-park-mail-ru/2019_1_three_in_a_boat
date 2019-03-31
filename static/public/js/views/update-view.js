'use strict';
import View from '../core/view.js';
import template from './views-templates/update-template.js';

/**
 * @class SigUpView
 */
export default class UpdateView extends View {
  /**
   * Create SignUpView object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Render Update page
   * @param {Object} user
   * @return {boolean} - status
   */
  render(user) {
    if (user) {
      const draw = template(user);
      this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
      return true;
    }
    return false;
  }
};
