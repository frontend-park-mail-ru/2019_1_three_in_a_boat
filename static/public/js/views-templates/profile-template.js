import ajax from '../ajax.js';
import {settings} from '../settings/config.js';

/**
 * Get template of the profile's page for user
 * @param {Object} user
 * @return {Promise} promise with a template
 */
export default function getTemplate(user) {
  return ajax.doGet({path: settings.url + '/'}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }
    return response.json();
  }).then((data) => {
    return [{
      block: 'profile-popup',
      mods: {main: true},
      title: 'Профиль',
      img: user.img.startsWith(settings.imgPath) ?
          user.img :
          settings.imgPath + user.img,
      allowEdit: data.user && data.user.uid === (user.id || user.uid),
      info: [
        ['Никнейм', user.nickname || user.username],
        ['Имя', user.firstName],
        ['Фамилия', user.lastName],
        ['Email', user.email],
        ['Дата рождения', user.date],
        ['Пол', user.gender],
      ],
    }];
  });
}
