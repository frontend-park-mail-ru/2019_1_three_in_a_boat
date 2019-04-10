'use strict';

import NotFoundController from '../controllers/not-found-controller.js';
import showMessage from '../views/offline-messagebox.js';

/**
 * @class Router
 */
export default class Router {
  /**
   *
   * @param {string} rootPath
   * @param {HTMLElement} rootElement
   */
  constructor(rootPath, rootElement) {
    this.rootElement = rootElement;
    this.routes = {};
    this.currentController = undefined;
  }

  /**
   * Add new view to a router
   * @param {string} url
   * @param {Controller} controller
   * @return {Router} this
   */
  addRoute(url, controller) {
    this.routes[url] = controller;
    return this;
  }

  /**
   * Open view
   * @param {string} url
   */
  open(url) {
    // to make paths like leaders and /leaders similar
    if (url.startsWith('/') && url.length > 1) {
      url = url.slice(1);
    }

    let newController = this.routes[url];
    if (!newController) {
      newController = new NotFoundController();
    }
    if (!navigator.onLine && newController.isRequiredOnline) {
      if (!this.currentController) {
        window.history.pushState({}, '', '/');
        window.history.pushState({}, '', '/');
        window.history.back();
      } else {
        showMessage(this.currentController.parent);
      }
      return;
    }
    if (this.currentController) {
      this.currentController.destructor();
    }

    newController.action();
    this.currentController = newController;
  }

  /**
   * Configure router's listeners
   */
  start() {
    window.addEventListener('popstate', () => {
      const currentPath = window.location.pathname;
      this.open(currentPath);
    });

    this.rootElement.addEventListener('click', (event) => {
      const link = event.target.closest('[data-link-type]');
      if (link === null) {
        return;
      }

      event.preventDefault();

      window.history.pushState({}, '', link.dataset['linkType']);
      this.open(link.dataset['linkType']);
    });

    const currentPath = window.location.pathname;
    this.open(currentPath);
  }
}

