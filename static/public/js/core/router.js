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
    if (this.currentController) {
      this.currentController.destructor();
    }
    // to make paths like leaders and /leaders similar
    if (url.startsWith('/') && url.length > 1) {
      url = url.slice(1);
    }

    const newController = this.routes[url];
    if (!newController) {
      console.log(this.routes, url);
      // we have to do something here, 404 or home?
      console.log('404: ', url, this.routes);
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

