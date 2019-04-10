import {settings} from '../../settings/config.js';

const yearOptions = [
  {
    content: 'Год',
    value: 0,
    selected: true,
  }].concat([...Array(119).keys()].map(
    (num) => ({
      content: num + 1900,
      value: num + 1900,
    })
).reverse());

const monthOptions = [
  {content: 'Месяц', value: 0, selected: true},
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

const dayOptions = [{
  content: 'День',
  value: 0,
  selected: true,
}].concat([...Array(30).keys()].map(
    (num) => ({
      content: num + 1,
      value: num + 1,
    })));

/**
 * Get template of the profile's update page for user
 * @param {Object} user
 * @return {Array} template of the profile's update page
 */
export default function template(user) {
  const date = [
    {
      block: 'select',
      fieldName: 'selectDay',
      attrs: {id: 'signup__selectDay'},
      options: dayOptions,
    },
    {
      block: 'select',
      fieldName: 'selectMonth',
      attrs: {id: 'signup__selectMonth'},
      options: monthOptions,
    },
    {
      block: 'select',
      fieldName: 'selectYear',
      attrs: {id: 'signup__selectYear'},
      options: yearOptions,
    },
  ];
  setSelectedDate(user, date);

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
                    name: 'Имя',
                    fieldName: 'firstName',
                    fieldAttrs: {
                      placeholder: 'Иван',
                      value: user.firstName,
                      checkable: true,
                      checkType: 'name',
                    },
                  },
                  {
                    name: 'Фамилия',
                    fieldName: 'lastName',
                    fieldAttrs: {
                      placeholder: 'Иванов',
                      value: user.lastName,
                      checkable: true,
                      checkType: 'lastName',
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
                    name: 'Дата рождения',
                    novalidate: true,
                    value: [
                      {
                        block: 'field-group',
                        content: date,
                      },
                    ],
                  },
                  {
                    name: 'Новый пароль',
                    fieldName: 'password',
                    fieldAttrs: {
                      type: 'password',
                      placeholder: 'Пароль',
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
      if (option.content === user.gender) {
        option.selected = true;
      }
    });
  }
}

/**
 * Set selected date
 * @param {Object} user
 * @param {Array} date
 */
function setSelectedDate(user, date) {
  if (user.birthDate !== '') {
    const userDate = user.birthDate.split('.');

    const dayOptions = date[0].options;
    dayOptions.forEach((option) => {
      if (option.content === +userDate[0]) {
        option.selected = true;
      }
    });

    const mounthOptions = date[1].options;
    mounthOptions.forEach((option) => {
      if (option.value === +userDate[1]) {
        option.selected = true;
      }
    });

    const yearOptions = date[2].options;
    yearOptions.forEach((option) => {
      if (option.content === +userDate[2]) {
        option.selected = true;
      }
    });
  }
}
