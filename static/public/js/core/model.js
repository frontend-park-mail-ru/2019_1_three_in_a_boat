'use strict';
/**
 * @class Model
 */
export default class Model {
  /**
   * Get model data
   */
  getData() {}

  /**
   * Send user data to the server
   * @param {HTMLFormElement} form
   * @param {Object} body
   */
  sendData(form, body) {}

  /**
   * Update user data on the server
   * @param {HTMLFormElement} form
   * @param {Object} body
   * @param {int} userId
   */
  updateData(form, body, userId) {}
};
