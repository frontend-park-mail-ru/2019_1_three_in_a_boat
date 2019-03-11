import ajax from "../ajax.js";
import {settings} from "../settings/config.js";

/**
 * Get template of the profile's page for user
 * @param {Object} user
 * @return {Array} template of the profile's page
 */
export default function getTemplate(user) {
  var editBtn = [];
  ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }
    response.json().then((data) => {
      if (data.user && data.user.uid === user.uid) {
        editBtn.push({
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
        });
      }
    });
  });

  console.log(editBtn);
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
        content: editBtn,
        // {
        //   block: 'btn',
        //   mods: {'size': 'large', 'with-icon': true, 'cancel': true},
        //   wrappedInside: 'profile-popup',
        //   content: [
        //     {
        //       block: 'icon',
        //       wrappedInside: 'btn',
        //       mods: {type: 'useredit', size: 'large'},
        //     },
        //     {
        //       elem: 'text',
        //       content: 'Изменить',
        //     },
        //   ],
        // },
        // ],
      },
    ],
  }];

  return template;
}
