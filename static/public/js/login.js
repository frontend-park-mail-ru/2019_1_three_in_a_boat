import createHeader from './header.js';
import createMenu from './menu.js';
import AjaxModule from './ajax.js';
import {validateForm} from './validation.js';

const ajax = new AjaxModule();

/**
 * Create login page
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
                    fieldName: 'loginEmail',
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
                    for: 'loginEmail',
                  },
                ],
              },
              {
                block: 'input',
                mods: {with: 'icon'},
                fieldName: 'loginPassword',
                wrappedInside: 'login-form',
                content: [
                  {
                    elem: 'field',
                    attrs: {
                      type: 'password',
                      placeholder: 'Пароль',
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
                for: 'loginPassword',
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

  const form = document.getElementById('loginForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (!validateForm(event.target)) {
      return;
    }

    const email = form.elements['loginEmail'].value;
    const password = form.elements['loginPassword'].value;
    ajax.doPost({
      callback() {
        application.innerHTML = '';
        createMenu(); // TODO: add setCookies
      },
      path: '/login',
      body: {
        login: email,
        password: password,
      },
    });
  });
}
