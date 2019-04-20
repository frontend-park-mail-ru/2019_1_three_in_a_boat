'use strict';
import Controller from '../core/controller.js';
import UserService from '../models/user-service.js';
import SignUpView from '../views/signup-view.js';
import {validateForm} from '../validation.js';
import {addValidationOnBlur} from '../validation.js';

/**
 * @class SignUpController
 */
export default class SignUpController extends Controller {
  /**
   * Create SignUp Controller
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new SignUpView(parent);
    this.events = []; // Array for collecting events
  }
  /**
   * Get data from input form on sign up page
   * @param {event} event
   * @return {Object} input form
   */
  _getFromSignUp(event) {
    const form = document.getElementById('signup-form');

    const email = form['signup-form_email'].value;
    const userName = form['signup-form_username'].value;
    const password = form['signup-form_password'].value;

    return {userName, password, name, lastName, email, date};
  }
  /**
   * Call 'sign up' rendering func and add event listeners
   */
  action() {
    this.view.render();
    const cancel = this.view.parent
        .getElementsByClassName('btn_color_muted')[0];
    cancel.addEventListener('click', this._cancelHandler);
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', this._submitHandler.bind(this));
    addValidationOnBlur();
    this.events.push(
        {item: form, type: 'submit', handler: this._submitHandler.bind(this)},
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
    const body = this._getFromSignUp(event);
    UserService.sendData(event.target, body).then((ok) => {
      if (ok) {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      } else {
        console.log('Client error, stay here');
      }
    });
  }
};
