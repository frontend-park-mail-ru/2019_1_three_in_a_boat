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

const template = () => [
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
        elem: 'content',
        content: [
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
                        fieldName: 'firstName',
                        fieldAttrs: {
                          type: 'text',
                          placeholder: 'Имя',
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
                    mods: {size: 'inline'},
                    content: [
                      {
                        elem: 'title',
                        elemMods: {align: 'left'},
                        content: ['Дата рождения'],
                      },
                      {
                        block: 'form-group',
                        mods: {align: 'stretch'},
                        content: {
                          block: 'field-group',
                          content: [
                            {
                              block: 'select',
                              fieldName: 'selectDay',
                              options: [
                                {
                                  content: 'День',
                                  value: 0,
                                  selected: true,
                                }].concat([...Array(30).keys()].map(
                                  (num) => ({
                                    content: num + 1,
                                    value: num + 1,
                                  }))),
                            },
                            {
                              block: 'select',
                              fieldName: 'selectMonth',
                              wrappedInside: 'signup-form',
                              options: [{
                                content: 'Месяц',
                                value: 0,
                                selected: true,
                              }].concat(months),
                            },
                            {
                              block: 'select',
                              fieldName: 'selectYear',
                              wrappedInside: 'signup-form',
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
                    block: 'form-group',
                    mix: {block: 'signup-form', elem: 'form-group'},
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
                    wrappedInside: 'signup-popup',
                    wrappedAs: 'singup-btn',
                    mods: {size: 'large'},
                    attrs: {type: 'submit'},
                    content: [{
                      elem: 'inner',
                      content: {
                        elem: 'text',
                        content: 'Зарегестироророваться',
                      },
                    }],
                  },
                  {
                    block: 'btn',
                    mods: {color: 'muted', size: 'large'},
                    wrappedInside: 'signup-popup',
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
      },
    ],
  }];

export default template;
