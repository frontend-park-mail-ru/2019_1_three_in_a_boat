/**
 * @class View
 */
export default class View {
  /**
   * Constructor to init events array
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    this.parent = parent;
    this.events = [];
  }

  /**
   * Function to delete all event listeners
   */
  destructor() {
    while (this.events.length) {
      const event = this.events.pop();
      event.item.removeEventListener(event.type, event.handler);
    }
  }

  /**
   * Render view
   */
  render() {}
}
