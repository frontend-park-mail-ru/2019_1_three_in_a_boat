import createHeader from './header.js';
import {createProfile} from './profile.js';
import ajax from './ajax.js';
import {initFileInputs, getBase64, previewFile} from './file-input.js';
import {settings} from './settings/config.js';
import {validateForm, checkResponse} from './validation.js';
import {parseUser} from './parsing.js';
import getTemplate from './views-templates/update-template.js';
import {addValidationOnBlur} from './validation.js';


/**
 * create Page with Profile Settings
 */
export default function createUpdateProfile() {
  createHeader();

  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      const user = parseUser(data.user);
      renderUpdateProfilePage(user);
      addValidationOnBlur();
    });
  });
}

/**
 * Render profile's update page
 * @param {Object} user
 */
function renderUpdateProfilePage(user) {
  const template = getTemplate(user);
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  initFileInputs();

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createProfile();
  });

  const form = document.getElementById('updateForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const firstName = form['updateForm_firstName'].value;
    const lastName = form['updateForm_lastName'].value;
    const email = form['updateForm_email'].value;
    const selectField = document.getElementsByTagName('select');
    const userName = form['updateForm_username'].value;
    const day = selectField['updateForm_selectDay'].value;
    const month = selectField['updateForm_selectMonth'].value;
    const year = selectField['updateForm_selectYear'].value;
    const gender = selectField['updateForm_selectMale'].value;
    const date = `${day}-${month}-${year}`;
    const password = form['updateForm_password'].value;
    let img = form['updateForm_avatar'].files[0];

    const path = settings.url + '/users/' + user.id;
    const callback = (response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        const ok = checkResponse(data, form);
        if (ok) {
          application.innerHTML = '';
          createProfile();
        }
      });
    };

    getBase64(img).then((result) => {
      img = result;
      const body = {
        name: firstName, lastName, userName,
        email, gender, date, password,
        img,
      };

      ajax.doPut({path, body}).then(callback);
    },
    () => {
      const body = {
        name: firstName, lastName, userName,
        email, gender, date, password,
      };

      ajax.doPut({path, body}).then(callback);
    });
  });
}

