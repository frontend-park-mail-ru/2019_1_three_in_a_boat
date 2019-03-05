import createHeader from "./header.js";

export default function createUpdateProfile() {
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
    }
  ];

  document.getElementById('application').insertAdjacentHTML('beforeend',
    bemhtml.apply(template)
  );
  createMenuLink();
};
