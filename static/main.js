'use strict';

const application = document.getElementById('application');

function createMenuLink() {
  const menuLink = {
    block: 'link',
    tag: 'a',
    attrs: { type: 'menu' },
    content: 'Назад в главное меню'
  };

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(menuLink)
  );
}

const createUpdateProfile = () => {
  createHeader();
  const template = [
    {
      block: 'update-profile-popup',
      mods: {'main': true},
      addCloseButton: true,
      content: [
        {
          mix: {'block': 'title'},
          elem: 'title',
          content: 'Изменение настроек',
        },
        {
          block: 'update-profile-form',
          content: [
            {
              elem: 'form-group',
              mix: {'block': 'form-group'},
              block: 'form-group',
              content: [
                {
                  elem: 'title',
                  content: {
                    block: 'update-profile',
                    elem: 'login',
                    content: 'Логин',
                  },
                },

                {
                  mix: {'block': 'input'},
                  elem: 'size-inline',
                  block: 'input',
                  content: [
                    {
                      elem: 'field',
                      mods: {'login': true},
                      content: {
                        elem: 'tooltip',
                        content: [
                          {
                            mods: {'title': true},
                            content: 'Укажите новый логин',
                          },
                          {
                            mods: {'help': true},
                            content: 'Вы можете изменить свой логин',
                          }
                        ]
                      }
                    },
                  ]
                },
                {
                  elem: 'title',
                  content: {
                    block: 'update-profile',
                    elem: 'phone-number',
                    content: 'Телефон',
                  },
                },
                {
                  mix: {'block': 'input'},
                  elem: 'size-inline',
                  block: 'filed-group',
                  content: [
                    {
                      elem: 'field',
                      mix: {'block': 'select'},
                      block: 'select',
                      isError: true,
                      content: [
                        {
                          elem: 'chosen-icon',
                          mix: {'block': 'icon'}
                        },

                      ]
                    },

                  ]
                },
              ]
            }
          ]
        },
        {
          elem: 'hr',
          mix: {'block': 'hr'},
        },
        {
          elem: 'double-btn',
          content: [
            {
              elem: 'update-btn',
              content: [
                {
                  disable: true,
                  block: 'btn',
                  content: [
                    {
                      elem: 'inner',
                      content: {
                        elem: 'text',
                        content:'Обновить'
                      }

                    }
                  ]
                },
                {
                  block: 'btn',
                  mods: {color: 'muted'},
                  content: [
                    {
                      elem: 'inner',
                      content: {
                        elem: 'text',
                        mods: {font: 'normal'},
                        content:'Отменить'
                      }
                    }
                  ]
                }
              ],
            },
          ]
        }
      ]
    }];
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );
  createMenuLink();
};

function createHeader() {
    const header = {
        block: 'header',
        mods: {'main': true},
        content: [
            {
                block: 'icon',
                mods: {color: 'orange', size: 'xlarge', type: 'mailru'}
            },
            {
                elem: 'title',
                content: ['hexagon']
              }
        ]
    };

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(header)
    );
}

function createMenu() {
    createHeader();

    const template = [
    {
        block: 'menu',
        content: [
            {
                block: 'title',
                mods: { large: true },
                content: 'Меню',
                wrappedInside: 'menu',
                wrappedAs: 'title'
            },
            {
                block: 'hr',
                mods: { inline: true }
            },
            {
                elem: 'items',
                points: [
                    {
                        href: 'signIn',
                        text: 'Авторизация',
                        type: 'signin'
                    },
                    {
                        href: 'signUp',
                        text: 'Регистрация',
                        type: 'key'
                    },
                    {
                        href: 'authors',
                        text: 'Авторы',
                        type: 'users'
                    },
                    {
                        href: 'leaders',
                        text: 'Лидеры',
                        type: 'crown'
                    },
                    {
                        href: 'play',
                        text: 'Играть',
                        type: 'gamepad'
                    }
                ]
            }
        ]
    }];

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(template)
    );
}

function createScoreBoard() {
    createHeader();

    const template = [
        {
          block: 'scoreboard',
          content: [
                {
                elem: 'items',
                scores: [
                    {
                      name: 'Никита',
                      img: '../static/public/images/nikita.jpg',
                      username: 'Kotyarich',
                      score: '9999',
                      userId: 1
                    },
                    {
                      name: 'Арсен',
                      img: '../static/public/images/pepe.jpg',
                      username: 'Arsen',
                      score: '9998',
                      userId: 2
                    },
                    {
                      name: 'Андрей',
                      img: '../static/public/images/andrey.jpg',
                      username: 'Andrew',
                      score: '9997',
                      userId: 3
                    }
                ]
                }
            ]
        }];

      document.getElementById('application').insertAdjacentHTML('beforeend',
          bemhtml.apply(template)
      );

      createMenuLink();
}

function createAuthors() {
    createHeader();

    const template = [
        {
          block: 'authors',
          content: [
            {
              elem: 'header',
              content: 'Проект разработали'
            },
            {
              elem: 'items',
              authors: [
                {
                  name: 'Никита',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/nikita.jpg',
                  description: '01234'
                },
                {
                  name: 'Арсен',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/pepe.jpg',
                  description: '56789'
                },
                {
                  name: 'Андрей',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/andrey.jpg',
                  description: 'Цифры закончились, Андрей, раньше надо было приходить'
                }
              ]
            }
          ]
        }];

      document.getElementById('application').insertAdjacentHTML('beforeend',
          bemhtml.apply(template)
      );

      createMenuLink();
}

function createLoginPage() {
    createHeader();

    const template = [{
        block: 'login-popup',
        content: [
            {
                block: 'title',
                wrappedInside: 'login-popup',
                wrappedAs: 'title',
                content: 'Войти'
            },
            {
                block: 'icon',
                wrappedInside: 'login-popup',
                wrappedAs: 'close-popup',
                mods: {
                    size: 'large',
                    color: 'black',
                    btn: true,
                    type: 'cross'
                }
            },
            {
                block: 'login-form',
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
                                    wrappedAs: 'input',
                                    attrs: {placeholder: 'Телефон или электронная почта'}
                                }
                            },
                            {
                                block: 'input',
                                mods: {with: 'icon'},
                                wrappedInside: 'login-form',
                                wrappedAs: 'input',
                                content: [
                                    {
                                        elem: 'field',
                                        attrs: {type: 'password', placeholder: 'Пароль'}
                                    },
                                    {
                                        block: 'icon',
                                        wrappedInside: 'input',
                                        wrappedAs: 'icon',
                                        mods: {
                                            color: 'black',
                                            btn: true,
                                            type: 'eye'
                                        }
                                    }
                                ]
                            }
                        ]
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
                                        attrs: {type: 'checkbox', id: 'login-form__remember-me-checkbox'}
                                    },
                                    {
                                        tag: 'label',
                                        block: 'login-form',
                                        elem: 'remember-me-label',
                                        attrs: {for: 'login-form__remember-me-checkbox'},
                                        content: 'Запомнить пароль'
                                    }
                                ]
                            },
                            {
                                content: {
                                    tag: 'a',
                                    block: 'login-form',
                                    elem: 'forgot-password-link',
                                    href: '#',
                                    content: 'Забыли пароль?'
                                }
                            }
                        ]
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
                                        content: 'Войти'
                                    }
                                }]
                            }
                        ]
                    }
                ]
            },
            {
                block: 'hr',
                wrappedInside: 'login-popup',
                wrappedAs: 'hr',
            },
            {
                elem: 'signup-link',
                content: {
                    tag: 'a',
                    href: '#',
                    content: 'Зарегистрироваться'
                }
            }
        ]
    }];

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(template)
    );

    createMenuLink();
}

const createSignUp = () => {
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
          block: 'signup-form',
          content: [
            {
              block: 'form-group',
              content: [
                {
                  block: 'input',
                  wrappedAs: 'input',
                  content: {
                    elem: 'field',
                    attrs: {type: 'text', placeholder: 'Имя'}
                  }
                },
                {
                  elem: 'help-text',
                  mix: {'block': 'form-group__help-text_hidden'},
                  mods: {type_error: true},
                  content: 'Заполните обязательное поле',
                }
              ]
            },
            {
              block: 'form-group',
              content: [
                {
                  block: 'input',
                  wrappedAs: 'input',
                  content: {
                    elem: 'field',
                    attrs: {type: 'text', placeholder: 'Фамилия', required : true}
                  }
                },
                {
                  elem: 'help-text',
                  mix: {'block' : 'form-group__help-text_hidden'},
                  mods: {type_error: true},
                  content: 'Заполните обязательное поле',
                }
              ]
            },
            {
              block: 'form-group',
              elem: 'size_inline',
              // mods: {size_inline: true},
              content: [
                {
                  elem: 'title',
                  mix: {elem: 'title_align_left'},
                  content: {
                    block: 'signup',
                    elem: 'day-select',
                    content: 'Дата рождения',
                  }
                },
                {
                  block: 'form-group',
                  cls: 'form-group__size_inline, form-group_align_stretch',
                  content: [
                    {
                      elem: 'filed',
                      content: {
                        block: 'signup-form',
                        elem: 'date-select',
                        content: {
                          block: 'select',
                          wrappedInside: 'signup-form',
                          attrs: {id: 'signup__day-select'},
                          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                        }
                      }
                    },
                    {
                      elem: 'filed',
                      content: {
                        block: 'signup-form',
                        elem: 'date-select',
                        content: {
                          block: 'select',
                          wrappedInside: 'signup-form',
                          attrs: {id: 'signup__date-select'},
                          options: ['Месяц', 'Янаварь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь'],
                        }
                      }
                    },
                    {
                      elem: 'filed',
                      // mix: {'block': 'form-group__field'},
                      content: {
                        block: 'signup-form',
                        elem: 'date-select',
                        content: {
                          block: 'select',
                          wrappedInside: 'signup-form',
                          attrs: {id: 'signup__date-select'},
                          options: [2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992],
                        }
                      }
                    }
                  ]
                },
                {
                  block: 'form-group',
                  // cls: 'form-group__size_inline, form-group_align_stretch',
                  content: [
                    {
                      elem: 'title',
                      cls: 'form-group__title_align_left',
                      content: {
                        attr: {for: 'signup__phone-number'},
                        content: 'Телефон',
                      }
                    },
                    {
                      elem: 'size_inline',
                      mix: 'form-group',
                      content: [
                        {
                          block: 'filed-group',
                          content: {
                            mods: {'field_position_prepend' : true},
                            elem: 'field_stretched_1',
                            content: {
                              elem: 'filed',
                              content: {
                                block: 'select',
                                mods: {'with-icon': true},
                                content: [
                                  {
                                    elem: 'chosen-icon',
                                    content: {
                                      block: 'icon',
                                      mods: {'type_ru': true},
                                    }
                                  },
                                  {
                                    block: 'select',
                                    // elem: 'field',
                                    attrs: {id: 'signup_choose-country'},
                                    wrappedInside: 'form-group',
                                    options: ['Россия', 'Украина', 'Беларусь'],
                                  }
                                ]
                              }
                            }
                          }
                        },
                        {
                          block: 'input',
                          cls: 'field-group__field, field-group__field_position_append, field-group__field_stretched_8',
                          content: {
                            elem: 'field-appendix',
                            content: [
                              {
                                elem: 'field-appendix',
                                mods: {'position_prepend': true},
                                attrs: {id: 'signup__country-code-span'}
                              },
                              {
                                elem: 'filed',
                                content: {
                                  elem: 'filed',
                                  mods: {'prepended': true},
                                  attrs: {type: 'text', id: 'signup__phone-number'}
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'form-group',
                  mix: {'block': 'signup-form__form-group'},
                  content: [
                    {
                      block: 'input',
                      content: {
                        elem: 'filed',
                        attrs: {type: 'password', placeholder: 'Пароль' },
                      }
                    },
                    {
                      elem: 'help-text',
                      mods: {'type_error' : true},
                      cls: 'form-group__help-text_hidden',
                      content: 'Заполните обязательное поле'
                    },
                  ]
                },
                {
                  block: 'form-group',
                  mix: {'block': 'signup-form__form-group'},
                  content: [
                    {
                      block: 'input',
                      content: {
                        elem: 'filed',
                        attrs: {type: 'password', placeholder: 'Повторите пароль' },
                      }
                    },
                    {
                      elem: 'help-text',
                      mods: {'type_error' : true},
                      cls: 'form-group__help-text_hidden',
                      content: 'Пароли не совпадают'
                    }
                  ]
                }
              ]
            }
          ]
        },
        // {
        //   block: 'signup-popup',
        //   elem: 'hr',
        //   mix: {'block' : 'hr'},
        // },
        // {
        //   block: 'signup-popup',
        //   elem: 'double-btn',
        //   content: [
            // {
            //   elem: 'signup-btn',
            //   content: {
            //     block: 'btn',
            //     mods: {'size_large' : true},
            //     content: {
            //       elem: 'text',
            //       content: 'Зарегестрироваться',
            //     }
            //   }
            // },
            // {
            //   elem: 'cancel-btn',
            //   content: {
            //     block: 'btn',
            //     cls: 'btn_color_muted',
            //     mods: {'size_large' : true},
            //     content: {
            //       elem: 'text',
            //       mods: {'normal': true},
            //       content: 'Отменить',
            //     }
            //   }
            // }
          // ]
        // }
      ]
    }
  ];
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );

  createMenuLink();
};

createMenu();

const pages = {
  menu: createMenu,
  signIn: createLoginPage,
  signUp: createSignUp,
  authors: createAuthors,
  leaders: createScoreBoard,
  updateProfile: createUpdateProfile,
};

application.addEventListener('click', function (event) {
	if (!(event.target instanceof HTMLAnchorElement)) {
		return;
	}

	event.preventDefault();
	const link = event.target;

	console.log({
        href: link.type,
    });

	application.innerHTML = '';

	pages[ link.type ]();
});
