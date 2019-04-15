/**
 * The class implements methods for calling communicating with the server API
 */
export default class ajax {
  /**
   * @param {string} method HTTP Method to use
   * @param {string} path Path to send the query to
   * @param {Object} body Body of the query (will be serialized as json)
   * @param {string} mode cors/no-cors/*same-origin, see fetch docs
   * @return {Promise} Promise for the HTTP request
   * @private
   */
  static _ajax({method, path, body, mode = 'cors'}) {
    const headers = new Headers();
    const csrfToken = getSingleCookie('csrf');
    if (csrfToken) {
      headers.append('X-CSRF-Token', csrfToken);
    }
    if (body) {
      headers.append('Content-Type', 'application/json; charset=utf-8');
      body = JSON.stringify(body);
    }

    const init = {headers, method, mode, credentials: 'include'};
    if (body) {
      init.body = body;
    }

    return fetch(path, init);
  }

  /**
   * @param {string} path Path to send the query to
   * @param {Object} body Body of the query (will be serialized as json)
   * @return {Promise} Promise for the HTTP request
   */
  static doGet({path = '/', body = null}) {
    return this._ajax({path, body, method: 'GET'});
  }

  /**
   * @param {string} path Path to send the query to
   * @param {Object} body Body of the query (will be serialized as json)
   * @return {Promise} Promise for the HTTP request
   */
  static doPost({path = '/', body = null}) {
    return this._ajax({path, body, method: 'POST'});
  }

  /**
   * @param {string} path Path to send the query to
   * @param {Object} body Body of the query (will be serialized as json)
   * @return {Promise} Promise for the HTTP request
   */
  static doPut({path = '/', body = null}) {
    return this._ajax({path, body, method: 'PUT'});
  }
}

/**
 * Retrieves a single cookie from document.cookie. If the cookie is unset,
 * returns undefined.
 * @param {string} name The name of the cookie
 * @return {string} The value of the cookie. Undefined if not found.
 */
function getSingleCookie(name) {
  const cookies = ('; ' + document.cookie).split('; ' + name + '=');
  if (cookies.length === 2) {
    const cookieValue = cookies.pop();
    const endOfCookieValue = cookieValue.indexOf(';');
    return cookieValue.substring(
        0, endOfCookieValue !== -1 ? endOfCookieValue : undefined);
  }
}
