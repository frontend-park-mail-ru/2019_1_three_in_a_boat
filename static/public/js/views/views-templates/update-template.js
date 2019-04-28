import {settings} from '../../settings/config.js';

/**
 * Get template of the profile's update page for user
 * @param {Object} user
 * @return {Array} template of the profile's update page
 */
export default function template(user) {
  const gender = {
    block: 'select',
    fieldName: 'selectMale',
    options: [
      {content: 'Пол', value: ''},
      {content: 'Мужской', value: 'male'},
      {content: 'Женский', value: 'female'},
      {content: 'Другой', value: 'other'},
    ],
  };
  setSelectedGender(user, gender);

  return [{
    block: 'profile-popup',
    mods: {main: true},
    content: [
      {
        block: 'title',
        wrappedInside: 'profile-popup',
        content: ['Обновление профиля'],
      },
      {
        elem: 'content',
        content: [
          {
            elem: 'profile-icon',
            attrs: {
              src: user.img.startsWith(settings.imgPath) ?
                  user.img :
                  settings.imgPath + user.img,
            },
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
                fields: [
                  {
                    name: 'Аватар',
                    novalidate: true,
                    value: {
                      block: 'file-input',
                      fieldName: 'avatar',
                    },
                  },
                  {
                    name: 'Email',
                    fieldName: 'email',
                    fieldAttrs: {
                      checkable: true,
                      checkType: 'email',
                      required: true,
                      value: user.email,
                      isUpd: true,
                      type: 'email',
                      placeholder: 'your.name@site.com',
                    },
                  },
                  {
                    name: 'Никейм',
                    fieldName: 'username',
                    fieldAttrs: {
                      required: true,
                      checkable: true,
                      isUpd: true,
                      value: user.username || user.nickname,
                      placeholder: 'username',
                      checkType: 'userName',
                    },
                  },
                  {
                    name: 'Пол',
                    novalidate: true,
                    value: gender,
                  },
                  {
                    name: 'Новый пароль',
                    fieldName: 'password',
                    fieldAttrs: {
                      type: 'password',
                      placeholder: 'Пароль',
                      isUpd: true,
                      checkable: true,
                      checkType: 'password',
                    },
                  },
                  {
                    name: 'Повторите пароль',
                    fieldName: 'passwordRepeat',
                    fieldAttrs: {
                      type: 'password',
                      placeholder: 'Повторите пароль',
                      checkable: true,
                      checkType: 'repeatPassword',
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
                    mods: {size: 'large'},
                    wrappedInside: 'profile-popup',
                    icon: 'useredit',
                    btnText: 'Обновить',
                  },
                  {
                    block: 'btn',
                    mods: {size: 'large', color: 'muted'},
                    wrappedInside: 'profile-popup',
                    icon: 'delete',
                    btnText: 'Отменить',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  ];
}

/**
 * Set selected gender
 * @param {Object} user
 * @param {Object} gender
 */
function setSelectedGender(user, gender) {
  if (user.gender !== '') {
    const options = gender.options;
    options.forEach((option) => {
      if (option.value === user.gender) {
        option.selected = true;
      }
    });
  }
}
