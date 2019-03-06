import createHeader from './header.js';
import createMenu from './menu.js';

/**
 *
 */
export default function createSignUp() {
  createHeader();
  const template = [
    {
      block: 'form',
      attrs: {novalidate: true},
      mix: {'block': 'signup-form'},
      content: {
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
            block: 'signup-form',
            content: [
              {
                block: 'form-group',
                content: [
                  {
                    block: 'input',
                    wrappedAs: 'input',
                    fieldName: 'firstName',
                    fieldAttrs: {type: 'text', placeholder: 'Имя'},
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
                content: [
                  {
                    block: 'input',
                    mods: {'required': true},
                    fieldName: 'lastName',
                    fieldAttrs: {type: 'text', placeholder: 'Фамилия'},
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
                    fieldAttrs: {type: 'password', placeholder: 'Пароль'},
                    required: true,
                  },
                  {
                    elem: 'help-text',
                    mods: {'type_error': true},
                    cls: 'form-group__help-text_hidden',
                    content: 'Заполните обязательное поле',
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
                    fieldAttrs: {type: 'password',
                      placeholder: 'Повторите пароль'},
                    required: true,
                  },
                  {
                    elem: 'help-text',
                    mods: {'type_error': true},
                    cls: 'form-group__help-text_hidden',
                    content: 'Пароли не совпадают',
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
    }];
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  const cnslBtn = document.getElementsByClassName('signup-form__cancel-btn')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createMenu();
  }
  );
};

