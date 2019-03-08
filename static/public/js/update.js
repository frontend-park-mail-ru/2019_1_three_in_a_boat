import createHeader from './header.js';
import createProfile from './profile.js';
import AjaxModule from './ajax.js';

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
                      wrappedAs: 'input',
                      fieldName: 'firstName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иван',
                        checkable: true,
                        checkType: 'name',
                      },
                    },
                    {
                      block: 'form-group',
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
                      mods: {'required': true},
                      fieldName: 'lastName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иванов',
                        checkable: true,
                        checkType: 'lastName',
                      },
                    },
                    {
                      block: 'form-group',
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
                        type: 'email',
                        placeholder: 'your.name@site.com',
                      },
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
                      mods: {'required': true},
                      fieldName: 'userName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'username',
                        checkable: true,
                        checkType: 'userName',
                      },
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'userName',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Пол',
                value: {
                  block: 'form-group',
                  cls: 'form-group__size_inline, form-group_align_stretch',
                  content: {
                    block: 'field-group',
                    elem: 'field',
                    content: [
                      {
                        elem: 'filed',
                        content: {
                          block: 'signup-form',
                          elem: 'date-select',
                          content: {
                            block: 'select',
                            fieldName: 'selectMale',
                            wrappedInside: 'signup-form',
                            attrs: {id: 'signup__selectMale'},
                            options: ['Пол', 'Мужской', 'Женский'],
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                elem: 'item',
                name: 'Дата рождения',
                value: [
                  {
                    block: 'form-group',
                    cls: 'form-group__size_inline, form-group_align_stretch',
                    content: {
                      block: 'field-group',
                      content: [
                        {
                          elem: 'filed',
                          content: {
                            block: 'signup-form',
                            elem: 'date-select',
                            content: {
                              block: 'select',
                              fieldName: 'selectDay',
                              wrappedInside: 'signup-form',
                              attrs: {id: 'signup__selectDay'},
                              options: [...Array(30).keys()].map(
                                  (num) => num + 1
                              ),
                            },
                          },
                        },
                        {
                          elem: 'filed',
                          content: {
                            block: 'signup-form',
                            elem: 'date-select',
                            content: {
                              block: 'select',
                              fieldName: 'selectMonth',
                              wrappedInside: 'signup-form',
                              attrs: {id: 'signup__selectMonth'},
                              options: ['Месяц', 'Янаварь', 'Февраль',
                                'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
                                'Август', 'Сентябрь', 'Октябрь',
                                'Ноябрь', 'Декабрь'],
                            },
                          },
                        },
                        {
                          elem: 'filed',
                          content: {
                            block: 'signup-form',
                            elem: 'date-select',
                            content: {
                              block: 'select',
                              fieldName: 'selectYear',
                              wrappedInside: 'signup-form',
                              attrs: {id: 'signup__selectYear'},
                              options: [...Array(119).keys()].map(
                                  (num) => num + 1900
                              ).reverse(),
                            },
                          },
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
                  block: 'input',
                  fieldName: 'avatar',
                  fieldAttrs: {
                    type: 'file',
                    accept: 'image/*',
                  },
                },
              },
              {
                elem: 'item',
                name: 'Пароль',
                value: {
                  block: 'form-group',
                  cls: 'form-group__size_inline, form-group_align_stretch',
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'password',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Пароль',
                        checkable: true,
                        checkType: 'password',
                      },
                      required: true,
                    },
                    {
                      block: 'form-group',
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
                  cls: 'form-group__size_inline, form-group_align_stretch',
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'passwordRepeat',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Повторите пароль',
                        checkable: true,
                        checkType: 'repeatPassword',
                      },
                      required: true,
                    },
                    {
                      block: 'form-group',
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
            elem: 'double-btn',
            content: [
              {
                block: 'btn',
                attrs: {'type' : 'submit'},
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
  }];

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

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
    console.log('i am here');
    const firstName = form.elements['firstName'].value;
    const secondName = form.elements['secondName'].value;
    const email = form.elements['email'].value;
    const userName = form.elements['userName'].value;
    const day = form.elements['selectDay'].value;
    const month = months[form.elements['selectMonth'].value];
    const year = form.elements['selectYear'].value;
    const date = `${day}-${month}-${year}`;
    const password = form.elements['password'].value;
    const passwordRepeat = form.elements['passwordRepeat'].value;

    const errors = document.getElementsByClassName('form-group__help-text');
    if (errors !== null) {
      alert('Passwords is not equals');
      return;
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
        date: date,
        password: password,
      },
    });
  });
};
