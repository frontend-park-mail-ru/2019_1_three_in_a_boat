const template = () => [{
  block: 'login-popup',
  content: [
    {
      block: 'title',
      wrappedInside: 'login-popup',
      wrappedAs: 'title',
      content: 'Вход',
    },
    {
      block: 'icon',
      tag: 'a',
      wrappedInside: 'login-popup',
      wrappedAs: 'close-popup',
      mods: {
        size: 'large',
        color: 'white',
        btn: true,
        type: 'cross',
      },
      attrs: {
        'data-link-type': 'menu',
      },
    },
    {
      elem: 'content',
      content: [
        {
          block: 'form',
          attrs: {id: 'loginForm', novalidate: true},
          name: 'loginForm',
          mix: {'block': 'login-form'},
          content: [
            {
              block: 'form-group',
              mods: {size: 'inline'},
              content: [
                {
                  elem: 'title',
                  elemMods: {align: 'left'},
                  content: ['Логин или email: '],
                },
                {
                  block: 'form-group',
                  mods: {size: 'large'},
                  content: [
                    {
                      block: 'input',
                      wrappedInside: 'login-form',
                      fieldName: 'email',
                      fieldAttrs: {
                        type: 'email',
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
                  elem: 'title',
                  elemMods: {align: 'left'},
                  content: ['Пароль: '],
                },
                {
                  block: 'form-group',
                  mods: {size: 'large'},
                  content: [
                    {
                      block: 'input',
                      mods: {with: 'icon'},
                      fieldName: 'password',
                      wrappedInside: 'login-form',
                      content: [
                        {
                          elem: 'field',
                          attrs: {
                            type: 'password',
                            required: true,
                            checkable: true,
                            checkType: 'password',
                          },
                        },
                        {
                          block: 'icon',
                          wrappedInside: 'input',
                          fieldName: 'rememberMeCheck',
                          mods: {
                            'show-pwd': true,
                            'color': 'black',
                            'btn': true,
                            'type': 'eye',
                          },
                          attrs: {'data-pwd-for': 'loginForm_password'}
                          ,
                        },
                      ],
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {hidden: true},
                      for: 'password',
                    },
                  ],
                },
              ],
            },
            {
              block: 'form-group',
              wrappedInside: 'login-form',
              wrappedAs: 'form-group',
              mods: {align: 'stretch'},
              mix: {block: 'login-form', elem: 'double-btn'},
              content: [
                {
                  block: 'btn',
                  wrappedInside: 'login-form',
                  wrappedAs: 'sumbit-btn',
                  fieldName: 'submit',
                  attrs: {type: 'submit'},
                  content: [{
                    elem: 'inner',
                    content: {
                      elem: 'text',
                      content: 'Войти',
                    },
                  }],
                },
                {
                  block: 'btn',
                  mods: {color: 'muted'},
                  attrs: {'data-link-type': 'menu', 'role': 'link'},
                  content: [{
                    block: 'btn',
                    elem: 'inner',
                    content: [{
                      block: 'btn',
                      elem: 'text',
                      elemMods: {'normal': true},
                      content: 'Назад',
                    }],
                  }],
                },
              ],
            },
          ],
        },
        {
          block: 'hr',
          wrappedInside: 'login-popup',
        },
        {
          elem: 'signup-link',
          content: {
            tag: 'a',
            href: '#',
            content: 'Зарегистрироваться',
            attrs: {'data-link-type': 'signUp'},
          },
        },
      ],
    },
  ],
}];

export default template;
