'use strict';
import View from '../core/view.js';
import template from './views-templates/signup-template.js';

/**
 * @class SigUpView
 */
export default class SigUpView extends View {
  /**
   * Create SignUpView object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Rendering view
   */
  render() {
    const draw = template();
    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  }
}
