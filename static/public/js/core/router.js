import View from './view.js';
import Controller from './controller.js';
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
    this.rootPath = rootPath;
    this.rootElement = rootElement;
    this.routes = {};
    this.currentController = new Controller(rootElement);
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
    this.rootElement.innerHTML = '';
    this.currentController.destructor();
    const newController = this.routes[url];
    if (!newController) {
      // we have to do something here, 404 or home?
      console.log('404: ', url);
    }
    console.log(newController);
    window.history.pushState({}, '', url);
    newController.action();
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

      console.log(link.dataset['linkType']);
      this.open(link.dataset['linkType']);
    });

    const currentPath = window.location.pathname;
    this.open(currentPath);
  }
}

