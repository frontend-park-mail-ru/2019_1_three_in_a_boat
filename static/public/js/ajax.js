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
   * @private
   */
  _ajax({
    callback = () => {},
    method = 'GET',
    path = '/',
    body = {},
  } = {}) {
    const XHR = ('onload' in new XMLHttpRequest())
        ? XMLHttpRequest : XDomainRequest;
    const xhr = new XHR();
    // const xhr = new XMLHttpRequest();
    xhr.open(method, path, true);
    xhr.withCredentials = true;

    if (body) {
      xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 4) {
        return;
      }
      console.log(xhr.response);
      callback(xhr);
    };

    if (body) {
      xhr.send(JSON.stringify(body));
    } else {
      xhr.send();
    }
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doGet({
    callback = () => {},
    path = '/',
    body = {},
  } = {}) {
    this._ajax({
      callback,
      path,
      body,
      method: 'GET',
    });
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doPost({
    callback = () => {},
    path = '/',
    body = {},
  } = {}) {
    this._ajax({
      callback,
      path,
      body,
      method: 'POST',
    });
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doDelete({
    callback = () => {},
    path = '/',
    body = {},
  } = {}) {
    this._ajax({
      callback,
      path,
      body,
      method: 'DELETE',
    });
  }

  /**
   *
   * @param callback
   * @param path
   * @param body
   */
  doPut({
    callback = () => {},
    path = '/',
    body = {},
  } = {}) {
    this._ajax({
      callback,
      path,
      body,
      method: 'PUT',
    });
  }
}

export default AjaxModule;
