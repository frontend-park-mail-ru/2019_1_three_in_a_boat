'use strict';
import Controller from '../core/controller.js';
import UserService from '../models/user-service.js';
import SignUpView from '../views/signup-view.js';
import {validateForm} from '../validation.js';

/**
 * @class SignUpController
 */
export default class SignUpController extends Controller {
  /**
   * Create SignUp Controller
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new SignUpView(parent);
    // Array for collecting events
    this.events = [];
  }

  /**
   * Send user data to server
   // * @param {event} event
   */
  action() {
    this.view.render();
    const cancel = this.view.parent
        .getElementsByClassName('btn_color_muted')[0];
    cancel.addEventListener('click', this._cancelHandler);
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', this._submitHandler);
    this.events.push(
        {item: form, type: 'submit', handler: this._submitHandler},
        {item: cancel, type: 'click', handler: this._cancelHandler},
    );
  }

  /**
   * Handel cancel event
   * @param {event} event
   */
  _cancelHandler(event) {
    event.preventDefault();
    window.history.pushState({}, '', '/');
    window.history.pushState({}, '', '/');
    window.history.back();
  };

  /**
   * Handel click on submit event
   * @param {event} event
   */
  _submitHandler(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const body = UserService.getFromSignUp(event);
    UserService.sendData(event.target, body).then((ok) => {
      if (ok) {
        window.history.pushState({}, '', 'profile');
        window.history.pushState({}, '', 'profile');
        window.history.back();
      } else {
        console.log('Client error, stay here');
      }
    });
  }
};
