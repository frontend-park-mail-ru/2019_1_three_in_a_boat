const template = [{
  block: 'login-popup',
  content: [
    {
      block: 'title',
      wrappedInside: 'login-popup',
      wrappedAs: 'title',
      content: 'Войти',
    },
    {
      block: 'icon',
      tag: 'a',
      wrappedInside: 'login-popup',
      wrappedAs: 'close-popup',
      mods: {
        size: 'large',
        color: 'black',
        btn: true,
        type: 'cross',
      },
      attrs: {
        type: 'menu',
      },
    },
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
              block: 'form-group',
              mods: {size: 'large'},
              content: [
                {
                  block: 'input',
                  wrappedInside: 'login-form',
                  fieldName: 'email',
                  fieldAttrs: {
                    type: 'email',
                    placeholder: 'Электронная почта',
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
              block: 'input',
              mods: {with: 'icon'},
              fieldName: 'password',
              wrappedInside: 'login-form',
              content: [
                {
                  elem: 'field',
                  attrs: {
                    type: 'password',
                    placeholder: 'Пароль',
                    required: true,
                    checkable: true,
                    checkType: 'null',
                  },
                },
                {
                  block: 'icon',
                  wrappedInside: 'input',
                  fieldName: 'rememberMeCheck',
                  mods: {
                    color: 'black',
                    btn: true,
                    type: 'eye',
                  },
                },
              ],
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
          mods: {align: 'space-between', size: 'large'},
          content: [
            {
              content: [
                {
                  block: 'checkbox',
                  fieldName: 'rememberMe',
                  wrappedInside: 'login-form',
                  wrappedAs: 'remember-me-checkbox',
                  mods: {size: 'small'},
                  attrs: {
                    type: 'checkbox',
                  },
                },
                {
                  tag: 'label',
                  block: 'login-form',
                  elem: 'remember-me-label',
                  for: 'rememberMe',
                  content: 'Запомнить пароль',
                },
              ],
            },
            {
              content: {
                tag: 'a',
                block: 'login-form',
                elem: 'forgot-password-link',
                href: '#',
                content: 'Забыли пароль?',
              },
            },
          ],
        },
        {
          block: 'form-group',
          mods: {align: 'center'},
          wrappedInside: 'login-form',
          wrappedAs: 'form-group',
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
      },
    },
  ],
}];

export default template;
