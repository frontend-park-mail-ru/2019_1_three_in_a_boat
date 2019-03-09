import createHeader from './header.js';
import createProfile from './profile.js';
import AjaxModule from './ajax.js';
import {initFileInputs, getBase64} from './file-input.js';
import {validateForm} from './validation.js';
import {parseUser} from './parsing.js';


const ajax = new AjaxModule();

const months = [
  {content: 'Январь', value: 1},
  {content: 'Февраль', value: 2},
  {content: 'Март', value: 3},
  {content: 'Апрель', value: 4},
  {content: 'Май', value: 5},
  {content: 'Июнь', value: 6},
  {content: 'Июль', value: 7},
  {content: 'Август', value: 8},
  {content: 'Сентябрь', value: 9},
  {content: 'Октябрь', value: 10},
  {content: 'Ноябрь', value: 11},
  {content: 'Декабрь', value: 12},
];

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
    path: 'http://127.0.0.1:3000/',
  });
}

/**
 * Render profile's update page
 * @param {Object} user
 */
function renderUpdateProfilePage(user) {
  const template = [{
    block: 'profile-popup',
    mods: {main: true},
    content: [
      {
        block: 'title',
        wrappedInside: 'profile-popup',
        content: ['Профиль'],
      },
      {
        block: 'icon-bg',
        mods: {
          bg: 'borderless', size: 'xxxlarge', shape: 'round',
          color: 'muted-light',
        },
        wrappedInside: 'profile-popup',
        wrappedAs: 'profile-icon',
        content: [
          {
            tag: 'span',
            block: 'profile-popup',
            elem: 'userpic-text',
            content: ['ИИ'],
          },
        ],
      },
      {
        block: 'form',
        attrs: {id: 'updateForm', novalidate: true},
        name: 'updateForm',
        mix: {'block': 'signup-form'},
        content: [
          {
            block: 'profile-info',
            wrappedInside: 'profile-popup',
            content: [
              {
                elem: 'item',
                name: 'Имя',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'firstName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иван',
                        value: user.firstName,
                        checkable: true,
                        checkType: 'name',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'firstName',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Фамилия',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'lastName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иванов',
                        value: user.lastName,
                        checkable: true,
                        checkType: 'lastName',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'lastName',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'E-mail',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'email',
                      fieldAttrs: {
                        checkable: true,
                        checkType: 'email',
                        required: true,
                        value: user.email,
                        type: 'email',
                        placeholder: 'your.name@site.com',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'email',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Никейм',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'userName',
                      fieldAttrs: {
                        required: true,
                        checkable: true,
                        value: user.nickname,
                        placeholder: 'username',
                        checkType: 'userName',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'userName',
                    }],
                },
              },
              {
                elem: 'item',
                name: 'Пол',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'select',
                      fieldName: 'selectMale',
                      attrs: {id: 'signup__selectMale'},
                      options: [
                        {content: 'Пол', value: ''},
                        {content: 'Мужской', value: 'male'},
                        {content: 'Женский', value: 'female'},
                        {content: 'Другой', value: 'other'},
                      ],
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: '_',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Дата рождения',
                value: [
                  {
                    block: 'form-group',
                    mods: {size: 'inline'},
                    content: {
                      block: 'field-group',
                      content: [
                        {
                          block: 'select',
                          fieldName: 'selectDay',
                          attrs: {id: 'signup__selectDay'},
                          options: [
                            {
                              content: 'День',
                              value: 0,
                              selected: true,
                            }].concat([...Array(30).keys()].map(
                              (num) => ({
                                content: num+1,
                                value: num+1}))),
                        },
                        {
                          block: 'select',
                          fieldName: 'selectMonth',
                          attrs: {id: 'signup__selectMonth'},
                          options: [{
                            content: 'Месяц',
                            value: 0,
                            selected: true,
                          }].concat(months),
                        },
                        {
                          block: 'select',
                          fieldName: 'selectYear',
                          attrs: {id: 'signup__selectYear'},
                          options: [
                            {
                              content: 'Год',
                              value: 0,
                              selected: true,
                            }].concat([...Array(119).keys()].map(
                              (num) => ({
                                content: num + 1900,
                                value: num + 1900,
                              })
                          ).reverse()),
                        },
                      ],
                    },
                  },
                ],
              },
              {
                elem: 'item',
                name: 'Аватар',
                value: {
                  block: 'form-group',
                  mods: {size: 'inline'},
                  content: [{
                    block: 'file-input',
                    fieldName: 'avatar',
                  }],
                },
              },
              {
                elem: 'item',
                name: 'Пароль',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'password',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Пароль',
                        checkable: true,
                        checkType: 'password',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'password',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Повторите пароль',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'passwordRepeat',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Повторите пароль',
                        checkable: true,
                        checkType: 'repeatPassword',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'passwordRepeat',
                    },
                  ],
                },
              },
            ],
          },
          {
            block: 'profile-popup',
            elem: 'double-btn',
            elemMods: {center: true},
            content: [
              {
                block: 'btn',
                attrs: {'type': 'submit'},
                mods: {'size': 'large', 'with-icon': true},
                wrappedInside: 'profile-popup',
                content: [
                  {
                    block: 'icon',
                    wrappedInside: 'btn',
                    mods: {type: 'useredit', size: 'large'},
                  },
                  {
                    elem: 'text',
                    content: ' Обновить',
                  },
                ],
              },
              {
                block: 'btn',
                mods: {'size': 'large', 'with-icon': true, 'color': 'muted'},
                wrappedInside: 'profile-popup',
                content: [
                  {
                    block: 'icon',
                    wrappedInside: 'btn',
                    mods: {type: 'delete', size: 'large'},
                  },
                  {
                    elem: 'text',
                    content: 'Удалить',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  ];

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
    const secondName = form['updateForm_lastName'].value;
    const email = form['updateForm_email'].value;
    const selectField = document.getElementsByTagName('select');
    const userName = form['updateForm_userName'].value;
    const day = selectField['updateForm_selectDay'].value;
    const month = selectField['updateForm_selectMonth'].value;
    const year = selectField['updateForm_selectYear'].value;
    const male = selectField['updateForm_selectMale'].value;
    const date = `${day}-${month}-${year}`;
    const password = form['updateForm_password'].value;
    let file = form['updateForm_avatar'].files[0];
    getBase64(file).then((result) => {
      file = result;

      ajax.doPut({
        callback() {
          application.innerHTML = '';
          createProfile();
        },
        path: 'http://127.0.0.1:3000/users/' + user.id,
        body: {
          name: firstName,
          lastName: secondName,
          userName: userName,
          email: email,
          gender: male,
          date: date,
          password: password,
          img: file,
        },
      });
    },
    (error) => {
      ajax.doPut({
        callback() {
          application.innerHTML = '';
          createProfile();
        },
        path: 'http://127.0.0.1:3000/users/' + user.id,
        body: {
          name: firstName,
          lastName: secondName,
          userName: userName,
          email: email,
          gender: male,
          date: date,
          password: password,
        },
      });
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
