import createHeader from './header.js';
import createMenu from './menu.js';
import createProfile from './profile.js';

/**
 *
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
        attrs: {novalidate: true},
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
                            fieldName: 'selectDay',
                            wrappedInside: 'signup-form',
                            attrs: {id: 'signup__day-select'},
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
                              attrs: {id: 'signup__day-select'},
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
              },
            ],
          },
          {
            elem: 'double-btn',
            content: [
              {
                block: 'btn',
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
                    content: 'Изменить',
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

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createProfile();
  });

  const form = document.getElementById('signup-popup');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

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
      return;
    }
    if (password !== passwordRepeat) {
      alert('Passwords is not equals');
      return;
    }

    ajax.doPost({
      callback() {
        application.innerHTML = '';
        createMenu(); // TODO: change to createUserProfile()
      },
      path: '/signup',
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
