'use strict';
import Controller from '../core/controller.js';
import UserModel from '../models/user-model.js';
import LoginView from '../views/login-view.js';
import {validateForm} from '../validation.js';
import MenuController from './menu-controller.js';
import {settings} from '../settings/config.js';

/**
 * @class LoginController
 */
export default class LoginController extends Controller {
  /**
   * Create Login Controller object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.model = new UserModel();
    this.view = new LoginView(parent);
    this.events = [];
  }

  /**
   * realize page logic
   */
  action() {
    this.view.render();
    this.initInputs();
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', this.submitHandler);
    const cancel = this.view.parent
        .getElementsByClassName('btn_color_muted')[0];
    cancel.addEventListener('click', this.clickHandler);
    this.events.push(
        {item: form, type: 'submit', handler: this.submitHandler},
        {item: application, type: 'click', handler: this.clickHandler}
    );
  }

  /**
   * Handel submit event
   * @param {event} event
   */
  submitHandler(event) {
    console.log('submitHandler is launch');
    event.preventDefault();
    if (!validateForm(event.target)) {
      return;
    }
    const form = event.target;
    const name = form.elements['email'].value;
    const password = form.elements['password'].value;

    const body = {name, password};
    this.model = new UserModel();
    console.log(this.model);
    this.model.sendData(form, body).then((ok) => {
      if (ok) {
        console.log('Ok. user is auth');
        window.location.href = '/';
      } else {
        console.log('Client error, stay here');
      }
    });
  }

  /**
   * Initializes show password buttons and maybe other stuff in the future
   */
  initInputs() {
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
   */
  clickHandler(event) {
    const link = event.target.closest('[data-link-type]');
    return link === null;
  }
};
