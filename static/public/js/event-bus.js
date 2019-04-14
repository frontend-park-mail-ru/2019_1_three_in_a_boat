/**
 * Event bus
 */
class Bus {
  /**
   * Event bus constructor
   */
  constructor() {
    this.listeners = {};
  }

  /**
   * Add event
   * @param {String} event
   * @param {Function} listener
   * @return {Bus}
   */
  on(event, listener) {
    (this.listeners[event] || (this.listeners[event] = [])).push(listener);
    return this;
  }

  /**
   * Remove listener
   * @param {String} event
   * @param {Function} listener
   * @return {Bus}
   */
  off(event, listener) {
    if (listener) {
      this.listeners[event] = (this.listeners[event] || []).filter(
          (l) => l !== listener);
    } else {
      this.listeners[event] = [];
    }
    return this;
  }

  /**
   * Produce event
   * @param {String} event
   * @param {Object} data
   * @return {Bus}
   */
  emit(event, data) {
    (this.listeners[event] || (this.listeners[event] = [])).forEach(
        (l) => l(data));
    return this;
  }
}

const bus = new Bus();
export default bus;
