'use strict';

import Controller from '../core/controller.js';
import User from '../models/user.js';
import ScoreboardView from '../views/scoreboard.js';
import Paginator from '../views/pagination.js';

/**
 * @class ScoreboardController
 */
export default class ScoreboardController extends Controller {
  /**
   * Construct obj
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
    this.user = new User();
    this.view = new ScoreboardView(parent);
  }
  /**
   * Create action
   */
  action() {
    const page = this._parsePageNumber();

    this.user.getUsers(page).then(
        (data) => {
          this.view.render(data);
          this._configureEvents();

          const paginator = new Paginator(this.parent);
          paginator.render(data.data.page + 1, data.data.nPages + 1);
          Paginator.setPaginationLinks(this.events, this._pagesLinkHandler);
        },
        (error) => console.log(error)); // TODO show 5** err mb
  }

  /**
   * Parse page number from url
   * @return {string}
   * @private
   */
  _parsePageNumber() {
    let page = window.location.search.replace('?', '')
        .split('&').reduce((param, e) => {
          const a = e.split('=');
          param[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
          return param;
        }, {})['page'];
    page = page? page: 0;

    return page;
  }

  /**
   * Add event listeners
   * @private
   */
  _configureEvents() {
    const profiles = document.getElementsByClassName('scoreboard__link');
    Array.from(profiles).forEach((link) => {
      if (Number(link.value) < 1) {
        return;
      }

      link.addEventListener('click', this._eventHandler);
      const event = {item: link, type: 'click', handler: this._eventHandler};
      this.events.push(event);
    });
  }

  /**
   * Handle click on profile link
   * @param {Event} event
   * @private
   */
  _eventHandler(event) {
    event.preventDefault();

    const path = settings.url + '/users/'
      + event.target.closest('.scoreboard__link').getAttribute('value');
    // TODO use model
    ajax.doGet({path}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        this.parent.innerHTML = '';
        const user = data.data;
        renderProfile(user);
      });
    });
  }

  /**
   * Handler for pagination link's click event
   * @param {Event} event
   * @private
   */
  _pagesLinkHandler(event) {
    event.preventDefault();
    const path = 'leaders?page=' + (event.target.value - 1);

    window.history.pushState({}, '', path);
    window.history.pushState({}, '', path);
    window.history.back();
  }
};
