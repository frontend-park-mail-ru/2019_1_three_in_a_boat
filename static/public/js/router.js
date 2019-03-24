import View from './views/view.js';

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
    this.currentView = new View(rootElement);
  }

  /**
   * Add new view to a router
   * @param {string} url
   * @param {View} view
   * @return {Router} this
   */
  addRoute(url, view) {
    this.routes[url] = view;
    return this;
  }

  /**
   * Open view
   * @param {string} url
   */
  open(url) {
    this.rootElement.innerHTML = '';
    this.currentView.destructor();
    const newView = this.routes[url];
    if (!newView) {
      // we have to do something here, 404 or home?
      console.log('404: ', url);
    }
    console.log(newView);
    window.history.pushState({}, '', url);
    newView.render();
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

