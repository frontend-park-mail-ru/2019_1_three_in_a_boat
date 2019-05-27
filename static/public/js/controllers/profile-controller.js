'use strict';

import Controller from '../core/controller.js';
import UserService from '../models/user-service.js';
import ProfileView from '../views/profile-view.js';

/**
 * @class ProfileController
 */
export default class ProfileController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, true);
    this.view = new ProfileView(parent);
  }

  /**
   * Create action
   */
  action() {
    const id = this._parseIdFromUrl();

    UserService.getUser(id).then(
        (data) => {
          this.view.render(data);
          this._configureEvents();
        },
        () => {
          window.history.pushState({}, '', '/signin');
          window.history.pushState({}, '', '/signin');
          window.history.back();
        });
  }

  /**
  * Add event listeners
  * @private
  */
  _configureEvents() {
    const btn = document.getElementsByClassName('btn_cancel')[0];
    if (btn) {
      const handle = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', '/profile/update');
        window.history.pushState({}, '', '/profile/update');
        window.history.back();
      };

      btn.addEventListener('click', handle);
      this.events.push({item: btn, type: 'click', handler: handle});
    }

    const backBtn = document.getElementsByClassName('btn_color_muted')[0];
    if (backBtn) {
      let handle;
      if (backBtn.attributes['data-type'].value === 'back') {
        handle = (event) => {
          event.preventDefault();
          window.history.back();
        };
      } else {
        handle = (event) => {
          event.preventDefault();
          window.history.pushState({}, '', '/');
          window.history.pushState({}, '', '/');
          window.history.back();
        };
      }

      backBtn.addEventListener('click', handle);
      this.events.push({item: backBtn, type: 'click', handler: handle});
    }
  }

  /**
   * Get id from url
   * @return {undefined}
   * @private
   */
  _parseIdFromUrl() {
    let id = window.location.search.replace('?', '')
        .split('&').reduce((param, e) => {
          const a = e.split('=');
          param[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
          return param;
        }, {})['id'];
    id = id? id: -1;

    return id;
  }
};
