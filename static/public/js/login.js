import createHeader from './header.js';
import createMenu from './menu.js';

/**
 *
 */
export default function createLoginPage() {
  createHeader();

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
        attrs: {novalidate: true},
        mix: {'block': 'login-form'},
        content: [
          {
            block: 'form-group',
            mods: {size: 'inline'},
            content: [
              {
                block: 'form-group',
                mods: {size: 'large'},
                content: {
                  block: 'input',
                  wrappedInside: 'login-form',
                  fieldName: 'loginEmail',
                  fieldAttrs: {type: 'email', placeholder: 'Электронная почта'},
                },
              },
              {
                block: 'input',
                mods: {with: 'icon'},
                wrappedInside: 'login-form',
                content: [
                  {
                    elem: 'field',
                    fieldName: 'loginPassword',
                    attrs: {type: 'password', placeholder: 'Пароль'},
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
                    wrappedInside: 'login-form',
                    wrappedAs: 'remember-me-checkbox',
                    mods: {size: 'small'},
                    attrs: {
                      type: 'checkbox',
                      id: 'login-form__remember-me-checkbox',
                    },
                  },
                  {
                    tag: 'label',
                    block: 'login-form',
                    elem: 'remember-me-label',
                    attrs: {for: 'login-form__remember-me-checkbox'},
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

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  document.getElementsByClassName('icon_type_cross')[0].addEventListener(
      'click',
      function(event) {
        event.preventDefault();
        application.innerHTML = '';
        createMenu();
      }
  );
}
