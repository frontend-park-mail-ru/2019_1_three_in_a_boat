'use strict';
import Controller from '../core/controller.js';
import UserService from '../models/user-service.js';
import LoginView from '../views/login-view.js';
import {validateForm, addValidationOnBlur} from '../validation.js';

/**
 * @class LoginController
 */
export default class LoginController extends Controller {
  /**
   * Create Login Controller object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new LoginView(parent);
  }

  /**
   * realize page logic
   */
  action() {
    this.view.render();
    this._initInputs();
    addValidationOnBlur();
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', this.submitHandler);
    const cancel = this.view.parent
        .getElementsByClassName('btn_color_muted')[0];
    cancel.addEventListener('click', this._clickHandler);
    this.events.push(
        {item: form, type: 'submit', handler: this.submitHandler},
        {item: application, type: 'click', handler: this._clickHandler}
    );
  }

  /**
   * Handel submit event
   * @param {event} event
   */
  submitHandler(event) {
    event.preventDefault();
    if (!validateForm(event.target)) {
      return;
    }
    const form = event.target;
    const name = form.elements['email'].value;
    const password = form.elements['password'].value;

    const body = {name, password};
    UserService.sendData(form, body).then((ok) => {
      if (ok) {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      } else {
        console.log('Client error, stay here');
      }
    });
  }

  /**
   * Initializes show password buttons and maybe other stuff in the future
   * @private
   */
  _initInputs() {
    const buttons = document.getElementsByClassName('icon_show-pwd');
    for (const btn of buttons) {
      btn.onclick = (e) => {
        const elt = e.target || e.srcElement;
        const target = document.getElementById(elt.dataset.pwdFor);
        if (target.type === 'password') {
          target.setAttribute('type', 'text');
        } else {
          target.setAttribute('type', 'password');
        }
      };
    }
  }

  /**
   * handle click event
   * @param {event} event
   * @return {boolean} ok-status
   * @private
   */
  _clickHandler(event) {
    const link = event.target.closest('[data-link-type]');
    return link === null;
  }
};
