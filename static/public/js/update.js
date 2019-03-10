import createHeader from './header.js';
import createProfile from './profile.js';
import AjaxModule from './ajax.js';
import {initFileInputs, getBase64} from './file-input.js';
import {settings} from './settings/config.js';
import {validateForm, checkResponse} from './validation.js';
import {parseUser} from './parsing.js';
import getTemplate from './views-templates/update-template.js';


const ajax = new AjaxModule();

/**
 * create Page with Profile Settings
 */
export default function createUpdateProfile() {
  createHeader();
  const ajax = new AjaxModule();
  ajax.doGet({
    callback(xhr) {
      const data = JSON.parse(xhr.responseText);
      const user = parseUser(data.user);
      renderUpdateProfilePage(user);
    },
    path: settings.url + '/',
  });
}

/**
 * Render profile's update page
 * @param {Object} user
 */
function renderUpdateProfilePage(user) {
  const template = getTemplate(user);
  setSelectedOptions(user, template);

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
    const userName = form['updateForm_userName'].value;
    const day = selectField['updateForm_selectDay'].value;
    const month = selectField['updateForm_selectMonth'].value;
    const year = selectField['updateForm_selectYear'].value;
    const gender = selectField['updateForm_selectMale'].value;
    const date = `${day}-${month}-${year}`;
    const password = form['updateForm_password'].value;
    let img = form['updateForm_avatar'].files[0];

    const path = settings.url + '/users/' + user.id;
    const callback = (xhr) => {
      const data = JSON.parse(xhr.responseText);
      const ok = checkResponse(data, form);
      if (ok) {
        application.innerHTML = '';
        createProfile();
      }
    };

    getBase64(img).then((result) => {
      img = result;
      const body = {
        firstName, lastName, userName,
        email, gender, date, password,
        img,
      };

      ajax.doPut({callback, path, body});
    },
    () => {
      const body = {
        firstName, lastName, userName,
        email, gender, date, password,
      };

      ajax.doPut({callback, path, body});
    });
  });
}

/**
 * Set selected options
 * @param {Object} user
 * @param {Array} template
 */
function setSelectedOptions(user, template) {
  if (user.gender !== '') {
    const options = template[0].content[2].content[0].content[4]
        .value.content[0].options;
    options.forEach((option) => {
      if (option.content === user.gender) {
        option.selected = true;
      }
    });
  }
  if (user.date !== '') {
    const date = user.date.split('.');
    const dateSelect = template[0].content[2].content[0].content[5]
        .value[0].content.content;

    const dayOptions = dateSelect[0].options;
    dayOptions.forEach((option) => {
      if (option.content === +date[0]) {
        option.selected = true;
      }
    });

    const mounthOptions = dateSelect[1].options;
    mounthOptions.forEach((option) => {
      if (option.value === +date[1]) {
        option.selected = true;
      }
    });

    const yearOptions = dateSelect[2].options;
    yearOptions.forEach((option) => {
      if (option.content === +date[2]) {
        option.selected = true;
      }
    });
  }
}
