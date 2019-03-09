import createHeader from './header.js';
import createMenu from './menu.js';
import AjaxModule from './ajax.js';
import {validateForm} from './validation.js';
import createProfile from './profile.js';

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
 * Create SignUp page
 */
export default function createSignUp() {
  createHeader();
  const template = [
    {
      block: 'signup-popup',
      mods: {'main': true},
      content: [
        {
          elem: 'title',
          mix: {'block': 'title'},
          content: 'Регистрация',
        },
        {
          elem: 'hr',
          mix: {'block': 'hr'},
        },
        {
          elem: 'explanation-text',
          content: 'Для регистрации на ресурсе укажите информацию о себе',
        },
        {
          block: 'form',
          attrs: {id: 'signup-form', novalidate: true},
          name: 'signup-form',
          mix: {'block': 'signup-form'},
          content: [
            {
              block: 'signup-form',
              content: [
                {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'firstName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Имя',
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
                {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'lastName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Фамилия',
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
                {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'email',
                      fieldAttrs: {
                        type: 'email',
                        placeholder: 'Email',
                        required: true,
                        checkable: true,
                        checkType: 'email',
                      },
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'email',
                    },
                  ],
                },
                {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'username',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Username',
                        required: true,
                        checkable: true,
                        checkType: 'username',
                      },
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'username',
                    },
                  ],
                },
                {
                  block: 'form-group',
                  content: {
                    elem: 'size_inline',

                    mods: {align_stretch: true},
                    content: [
                      {
                        elem: 'title',
                        mix: {elem: 'title_align_left'},
                        content: {
                          block: 'signup',
                          elem: 'day-select',
                          content: 'Дата рождения',
                        },
                      },
                      {
                        block: 'form-group',
                        cls: 'form-group__size_inline,' +
                            'form-group_align_stretch',
                        content: {
                          block: 'field-group',
                          content: [
                            {
                              elem: 'filed',
                              cls: 'form-group__field',
                              content: {
                                block: 'signup-form',
                                elem: 'date-select',
                                content: {
                                  block: 'select',
                                  fieldName: 'selectDay',
                                  wrappedInside: 'signup-form',
                                  attrs: {id: 'signup__day-select'},
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
                              },
                            },
                            {
                              elem: 'filed',
                              cls: 'form-group__field',
                              content: {
                                block: 'signup-form',
                                elem: 'date-select',
                                content: {
                                  block: 'select',
                                  fieldName: 'selectMonth',
                                  wrappedInside: 'signup-form',
                                  attrs: {id: 'signup__date-select'},
                                  options: [{
                                    content: 'Месяц',
                                    value: 0,
                                    selected: true,
                                  }].concat(months),
                                },
                              },
                            },
                            {
                              elem: 'filed',
                              cls: 'form-group__field',
                              content: {
                                block: 'signup-form',
                                elem: 'date-select',
                                content: {
                                  block: 'select',
                                  fieldName: 'selectYear',
                                  wrappedInside: 'signup-form',
                                  attrs: {id: 'signup__date-select'},
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
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  block: 'form-group',
                  mix: {'block': 'signup-form__form-group'},
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'password',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Пароль',
                        required: true,
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
                {
                  block: 'form-group',
                  mix: {'block': 'signup-form__form-group'},
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'passwordRepeat',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Повторите пароль',
                        required: true,
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
              ],
            },
            {
              block: 'signup-popup',
              elem: 'hr',
              mix: {'block': 'hr'},
            },
            {
              block: 'signup-popup',
              elem: 'double-btn',
              content: [
                {
                  block: 'btn',
                  wrappedInside: 'signup-form',
                  wrappedAs: 'singup-btn',
                  mods: {size: 'large'},
                  attrs: {type: 'submit'},
                  content: [{
                    elem: 'inner',
                    content: {
                      elem: 'text',
                      content: 'Зарегестиророваться',
                    },
                  }],
                },
                {
                  block: 'btn',
                  mods: {color: 'muted', size: 'large'},
                  wrappedInside: 'signup-form',
                  wrappedAs: 'cancel-btn',
                  content: [{
                    elem: 'inner',
                    content: {
                      elem: 'text',
                      cls: 'btn__text_normal',
                      content: 'Отменить',
                    },
                  },
                  ],
                },
              ],
            },
          ],
        },
      ],
    }];

  document.getElementById('application').insertAdjacentHTML(
      'beforeend',
      bemhtml.apply(template)
  );

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createMenu();
  });

  const form = document.getElementById('signup-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const firstName = form['signup-form_firstName'].value;
    const secondName = form['signup-form_lastName'].value;
    const email = form['signup-form_email'].value;
    const userName = form['signup-form_username'].value;

    const selectField = document.getElementsByTagName('select');
    const day = selectField['signup-form_selectDay'].value;
    const month = selectField['signup-form_selectMonth'].value;
    const year = selectField['signup-form_selectYear'].value;
    const date = `${day}-${month}-${year}`;

    const password = form['signup-form_password'].value;

    console.log({
      username: userName,
      password: password,
      name: firstName,
      lastname: secondName,
      email: email,
      date: date,
    });
    ajax.doPost({
      callback() {
        application.innerHTML = '';
        createProfile();
      },
      path: 'http://127.0.0.1:3000/users',
      body: {
        username: userName,
        password: password,
        name: firstName,
        lastname: secondName,
        email: email,
        date: date,
      },
    });
  });
};

