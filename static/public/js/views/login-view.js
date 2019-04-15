'use strict';
import View from '../core/view.js';
import template from './views-templates/login-template.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

/**
 * @class LoginView
 */
export default class LoginView extends View {
  /**
   *
   * @param {HTMLElement}parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Render Login page
   */
  render() {
    const draw = template();
    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  }
}
