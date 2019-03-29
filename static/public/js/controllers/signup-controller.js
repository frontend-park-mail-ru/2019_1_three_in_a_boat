'use strict';
import Controller from '../core/controller.js';
import UserModel from '../models/user-model.js';
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
    this.model = new UserModel();
    this.view = new SignUpView(parent);
    // Array for collecting events
    this.events = [];
  }

  /**
   * Send user data to server
   // * @param {event} event
   */
  action() {
    console.log(this.model);
    this.view.render();
    const cancel = this.view.parent
        .getElementsByClassName('btn_color_muted')[0];
    cancel.addEventListener('click', this.cancelHandler);
    const form = document.getElementById('signup-form');
    form.addEventListener('submit', this.submitHandler);
    this.events.push(
        {item: form, type: 'submit', handler: this.submitHandler},
        {item: cancel, type: 'click', handler: this.cancelHandler},
    );
  }

  /**
   * Handel cancel event
   * @param {event} event
   */
  cancelHandler(event) {
    event.preventDefault();
    console.log('cancel button pressed');
    // this.view.render()
    // application.innerHTML = '';
    // createMenu();
  };

  /**
   * Handel click on submit event
   * @param {event} event
   */
  submitHandler(event) {
    console.log('submitHandler is launch');
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    this.model = new UserModel();
    console.log(this.model);
    const body = this.model.getFromSignUp(event);
    this.model.sendData(event.target, body).then((ok) => {
      if (ok) {
        console.log('Ok. Create profile page');
        window.location.href = 'profile';
      } else {
        console.log('Client error, stay here');
      }
    });
  }
};
