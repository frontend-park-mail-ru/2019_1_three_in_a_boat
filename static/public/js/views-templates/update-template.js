import {settings} from '../settings/config.js';

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

/**
 * Get template of the profile's update page for user
 * @param {Object} user
 * @return {Array} template of the profile's update page
 */
export default function getTemplate(user) {
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
        elem: 'profile-icon',
        attrs: {
          src: user.img.startsWith(settings.imgPath) ?
              user.img :
              settings.imgPath + user.img},
      },
      {
        block: 'form',
        attrs: {id: 'updateForm', novalidate: true},
        name: 'updateForm',
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
                      fieldName: 'firstName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иван',
                        value: user.firstName,
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
              },
              {
                elem: 'item',
                name: 'Фамилия',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'lastName',
                      fieldAttrs: {
                        type: 'text',
                        placeholder: 'Иванов',
                        value: user.lastName,
                        checkable: true,
                        checkType: 'lastName',
                      },
                    },
                    {
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
                        checkable: true,
                        checkType: 'email',
                        required: true,
                        value: user.email,
                        type: 'email',
                        placeholder: 'your.name@site.com',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'email',
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
                      fieldName: 'username',
                      fieldAttrs: {
                        required: true,
                        checkable: true,
                        value: user.nickname,
                        placeholder: 'username',
                        checkType: 'userName',
                      },
                    },
                    {
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: 'username',
                    }],
                },
              },
              {
                elem: 'item',
                name: 'Пол',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'select',
                      fieldName: 'selectMale',
                      attrs: {id: 'signup__selectMale'},
                      options: [
                        {content: 'Пол', value: ''},
                        {content: 'Мужской', value: 'male'},
                        {content: 'Женский', value: 'female'},
                        {content: 'Другой', value: 'other'},
                      ],
                    },
                    {
                      block: 'form-group',
                      elem: 'help-text',
                      elemMods: {type: 'hidden'},
                      for: '_',
                    },
                  ],
                },
              },
              {
                elem: 'item',
                name: 'Дата рождения',
                value: [
                  {
                    block: 'form-group',
                    mods: {size: 'inline'},
                    content: {
                      block: 'field-group',
                      content: [
                        {
                          block: 'select',
                          fieldName: 'selectDay',
                          attrs: {id: 'signup__selectDay'},
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
                          attrs: {id: 'signup__selectMonth'},
                          options: [{
                            content: 'Месяц',
                            value: 0,
                            selected: true,
                          }].concat(months),
                        },
                        {
                          block: 'select',
                          fieldName: 'selectYear',
                          attrs: {id: 'signup__selectYear'},
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
                elem: 'item',
                name: 'Аватар',
                value: {
                  block: 'form-group',
                  mods: {size: 'inline'},
                  content: [{
                    block: 'file-input',
                    fieldName: 'avatar',
                  }],
                },
              },
              {
                elem: 'item',
                name: 'Пароль',
                value: {
                  block: 'form-group',
                  content: [
                    {
                      block: 'input',
                      fieldName: 'password',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Пароль',
                        checkable: true,
                        checkType: 'password',
                      },
                    },
                    {
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
                  content: [
                    {
                      block: 'input',
                      fieldName: 'passwordRepeat',
                      fieldAttrs: {
                        type: 'password',
                        placeholder: 'Повторите пароль',
                        checkable: true,
                        checkType: 'repeatPassword',
                      },
                    },
                    {
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
            block: 'profile-popup',
            elem: 'double-btn',
            elemMods: {center: true},
            content: [
              {
                block: 'btn',
                attrs: {'type': 'submit'},
                mods: {'size': 'large', 'with-icon': true},
                wrappedInside: 'profile-popup',
                content: [
                  {
                    block: 'icon',
                    wrappedInside: 'btn',
                    mods: {type: 'useredit', size: 'large'},
                  },
                  {
                    elem: 'text',
                    content: ' Обновить',
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

  return template;
}
