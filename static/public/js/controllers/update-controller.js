'use strict';
import Controller from '../core/controller.js';
import UpdateView from '../views/update-view.js';
import UserService from '../models/user-service.js';
import {validateForm} from '../validation.js';
import {getBase64} from '../file-input.js';

/**
 * @class UpdateController
 */
export default class UpdateController extends Controller {
  /**
   * Create UpdateController object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.view = new UpdateView(parent);
    this.user = null;
    this.events = [];
  }

  /**
   * get user data from form
   * @param {event} event
   * @return {Object} user info object
   * @private
   */
  _getFromProfileForm(event) {
    const form = event.target;
    const firstName = form['updateForm_firstName'].value;
    const lastName = form['updateForm_lastName'].value;
    const email = form['updateForm_email'].value;
    const selectField = document.getElementsByTagName('select');
    const userName = form['updateForm_username'].value;
    const day = selectField['updateForm_selectDay'].value;
    const month = selectField['updateForm_selectMonth'].value;
    const year = selectField['updateForm_selectYear'].value;
    const gender = selectField['updateForm_selectMale'].value;
    const date = `${day}-${month}-${year}`;
    const password = form['updateForm_password'].value;
    const img = form['updateForm_avatar'].files[0];
    return {name: firstName, lastName, userName, email,
      date, gender, password, img};
  }
  /**
   * Create logout
   */
  action() {
    UserService.getData().then(
        (user) => {
          this.user = user;
          this.view.render(this.user);
          const cancel = this.view.parent
              .getElementsByClassName('btn_color_muted')[0];
          cancel.addEventListener('click', this._cancelHandler);
          const form = document.getElementById('updateForm');
          form.addEventListener('submit', this._submitHandler.bind(this));
          this.events.push(
              {
                item: form,
                type: 'submit',
                handler: this._submitHandler.bind(this),
              },
              {item: cancel, type: 'click', handler: this._cancelHandler},
          );
        });
  }

  /**
   * Handel click on submit event
   * @param {event} event
   */
  _submitHandler(event) {
    event.preventDefault();
    if (!validateForm(event.target)) {
      return;
    }

    const body = this._getFromProfileForm(event);
    getBase64(body.img).then(
        (result) => {
          body.img = result;
          return UserService.updateData(event.target, body, this.user.uid);
        },
        () => UserService.updateData(event.target, body, this.user.uid)
    ).then((ok) => {
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
   * Handel cancel event
   * @param {event} event
   */
  _cancelHandler(event) {
    event.preventDefault();
    window.history.back();
  }
};
