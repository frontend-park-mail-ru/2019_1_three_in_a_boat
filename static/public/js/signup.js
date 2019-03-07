import createHeader from './header.js';
import createMenu from './menu.js';
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
          attrs: {novalidate: true},
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
                  content: [
                    {
                      block: 'input',
                      wrappedAs: 'input',
                      fieldName: 'firstName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Имя',
                        required: true,
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
                      mods: {'required': true},
                      fieldName: 'lastName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Фамилия',
                        required: true,
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
                      mods: {'required': true},
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
                      mods: {'required': true},
                      fieldName: 'email',
                      fieldAttrs: {
                        type: 'email',
                        placeholder: 'your.name@site.com',
                      },
                    },
                    {
                      elem: 'help-text',
                      mix: {'block': 'form-group__help-text_hidden'},
                      mods: {type_error: true},
                      content: 'Заполните обязательное поле',
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
                        cls: 'form-group__size_inline, form-group_align_stretch',
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
                                  options: [...Array(30).keys()].map(
                                      (num) => num + 1
                                  ),
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
                                  options: ['Месяц', 'Янаварь', 'Февраль',
                                    'Март', 'Апрель', 'Май', 'Июнь', 'Июль',
                                    'Август', 'Сентябрь', 'Октябрь',
                                    'Ноябрь', 'Декабрь'],
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
      bemhtml.apply(template));

  const cnslBtn = document.getElementsByClassName('signup-form__cancel-btn')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createMenu();
  });

  // const form = document.getElementById('signup-popup');
  // form.addEventListener('submit', function(event) {
  //   event.preventDefault();
  //
  //   const name = form.elements['name'].value;
  //   const surname = form.elements['surname'].value;
  //   const email = form.elements['email'].value;
  //   const day = form.elements['day-select'].value;
  //   const month = months[form.elements['month-select'].value];
  //   const year = form.elements['year-select'].value;
  //   const date = `${day}-${month}-${year}`;
  //   const password = form.elements['password'].value;
  //   const passwordRepeat = form.elements['password_repeat'].value;

  // const errors = document.getElementsByClassName('form-group__help-text');
  // if (errors !== null) {
  //   return;
  // }
  // if (password !== passwordRepeat) {
  //   alert('Passwords is not equals');
  //   return;
  // }
  //
  //   ajax.doPost({
  //     callback() {
  //       application.innerHTML = '';
  //       createMenu(); // TODO: change to createUserProfile()
  //     },
  //     path: '/signup',
  //     body: {
  //       name: name,
  //       surname: surname,
  //       email: email,
  //       date: date,
  //       password: password,
  //     },
  //   });
  // });
};

