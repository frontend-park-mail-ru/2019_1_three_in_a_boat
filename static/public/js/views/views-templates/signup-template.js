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
            mix: {block: 'signup-form'},
            content: [
              {
                block: 'signup-form',
                content: [
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
                        elemMods: {hidden: true},
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
                        elemMods: {hidden: true},
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
                        elemMods: {hidden: true},
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
                        elemMods: {hidden: true},
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
                        content: 'Зарегестироваться',
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
