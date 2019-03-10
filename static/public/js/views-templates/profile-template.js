/**
 * Get template of the profile's page for user
 * @param {Object} user
 * @return {Array} template of the profile's page
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
        attrs: {src: user.img},
      },
      {
        block: 'profile-info',
        wrappedInside: 'profile-popup',
        userInfo: [
          ['Никнейм', user.nickname],
          ['Имя', user.firstName],
          ['Фамилия', user.lastName],
          ['Email', user.email],
          ['Дата рождения', user.date],
          ['Пол', user.gender],
        ],
      },
      {
        elem: 'double-btn',
        content: [
          {
            block: 'btn',
            mods: {'size': 'large', 'with-icon': true, 'cancel': true},
            wrappedInside: 'profile-popup',
            content: [
              {
                block: 'icon',
                wrappedInside: 'btn',
                mods: {type: 'useredit', size: 'large'},
              },
              {
                elem: 'text',
                content: 'Изменить',
              },
            ],
          },
        ],
      },
    ],
  }];

  return template;
}
