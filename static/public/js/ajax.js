/**
 *
 */
class AjaxModule {
  /**
   *
   * @param callback
   * @param method
   * @param path
   * @param body
   * @param mode
   * @private
   */
  _ajax({callback, method, path, body, mode='cors'}) {
    const headers = new Headers();
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
   *
   * @param callback
   * @param path
   * @param body
   */
  doGet({callback = () => {}, path = '/', body = null}) {
    return this._ajax({callback, path, body, method: 'GET'});
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doPost({callback = () => {}, path = '/', body = null}) {
    return this._ajax({callback, path, body, method: 'POST'});
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doPut({callback = () => {}, path = '/', body = null}) {
    return this._ajax({callback, path, body, method: 'PUT'});
  }
}

const ajax = new AjaxModule();
export default ajax;
