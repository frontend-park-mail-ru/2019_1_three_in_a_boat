import createHeader from './header.js';
import createProfile from './profile.js';
import AjaxModule from './ajax.js';
import initFileInputs from './file-input.js';


const ajax = new AjaxModule();

const months = {
  'Январь': '01',
  'Февраль': '02',
  'Март': '03',
  'Апрель': '04',
  'Май': '05',
  'Июнь': '06',
  'Июль': '07',
  'Август': '08',
  'Сентябрь': '09',
  'Октябрь': '10',
  'Ноябрь': '11',
  'Декабрь': '12',
};

/**
 * create Page with Profile Settings
 */
export default function createUpdateProfile() {
  createHeader();
  // TODO: add check auth
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
        fieldName: 'updateForm',
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
                        required: true,
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
                      options: ['Пол', 'Мужской', 'Женский'],
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
                          options: [...Array(30).keys()].map(
                              (num) => num + 1
                          ),
                        },
                        {
                          block: 'select',
                          fieldName: 'selectMonth',
                          attrs: {id: 'signup__selectMonth'},
                          options: ['Месяц', 'Янаварь', 'Февраль',
                            'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
                            'Август', 'Сентябрь', 'Октябрь',
                            'Ноябрь', 'Декабрь'],
                        },
                        {
                          block: 'select',
                          fieldName: 'selectYear',
                          attrs: {id: 'signup__selectYear'},
                          options: [...Array(119).keys()].map(
                              (num) => num + 1900
                          ).reverse(),
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
                        required: true,
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
                        required: true,
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
                mods: {'size': 'large', 'with-icon': true, 'cancel': true},
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
  ]
  ;

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  initFileInputs();

  const cnslBtn = document.getElementsByClassName('btn_cancel')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createProfile();
  });

  const form = document.getElementById('updateForm');
  console.log(form);
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = form['updateForm_firstName'].value;
    const secondName = form['updateForm_lastName'].value;
    const email = form['updateForm_email'].value;
    const selectField = document.getElementsByTagName('select');
    const userName = form['updateForm_userName'].value;
    const day = selectField['updateForm_selectDay'].value;
    const month = months[selectField['updateForm_selectMonth'].value];
    const year = selectField['updateForm_selectYear'].value;
    const male = selectField['updateForm_selectMale'].value;
    const date = `${day}-${month}-${year}`;
    const password = form['updateForm_password'].value;
    const passwordRepeat = form['updateForm_passwordRepeat'].value;

    const errors = document.getElementsByClassName('form-group__help-text');
    if (errors !== null) {
      console.log(errors);
    }
    if (password !== passwordRepeat) {
      alert('Passwords is not equals');
      return;
    }

    ajax.doPost({
      callback() {
        application.innerHTML = '';
        createProfile(); // TODO: change to createUserProfile()
      },
      path: 'http://127.0.0.1:3000/settings',
      body: {
        firstName: firstName,
        lastName: secondName,
        userName: userName,
        email: email,
        male: male,
        date: date,
        password: password,
      },
    });
  });
};
