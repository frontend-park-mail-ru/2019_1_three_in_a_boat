'use strict';
import Controller from '../core/controller.js';
import UpdateView from '../views/update-view.js';
import UserService from '../models/user-service.js';
import {validateForm, addValidationOnBlur} from '../validation.js';
import {getBase64, initFileInputs} from '../file-input.js';

/**
 * @class UpdateController
 */
export default class UpdateController extends Controller {
  /**
   * Create UpdateController object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new UpdateView(parent);
    this.user = null;
    this.events = [];
  }

  /**
   * Create logout
   */
  action() {
    UserService.getData().then(
        (user) => {
          this.user = user;
          this.view.render(this.user);
          addValidationOnBlur();
          initFileInputs();
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
          if (result) {
            body.img = result;
          }
          return UserService.updateData(event.target, body, this.user.uid);
        },
        () => UserService.updateData(event.target, body, this.user.uid)
    ).then((ok) => {
      if (ok) {
        window.history.pushState({}, '', '/profile');
        window.history.pushState({}, '', '/profile');
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

  /**
   * get user data from form
   * @param {event} event
   * @return {Object} user info object
   * @private
   */
  _getFromProfileForm(event) {
    const form = event.target;
    const email = form['updateForm_email'].value;
    const selectField = document.getElementsByTagName('select');
    const userName = form['updateForm_username'].value;
    const gender = selectField['updateForm_selectMale'].value;
    const password = form['updateForm_password'].value;
    const img = form['updateForm_avatar'].files[0];
    return {name: null, lastName: null, userName, email,
      date: null, gender, password, img};
  }
};
