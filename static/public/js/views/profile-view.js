import {settings} from '../settings/config.js';
import {parseUser} from '../parsing.js';
import View from '../core/view.js';


/**
 * @class ProfileView
 */
export default class ProfileView extends View {
  /**
   *
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Render profile view
   * @param {Object} user
   */
  render(user) {
    const profile = parseUser(user);

    const template = [{
      block: 'profile-popup',
      mods: {main: true},
      title: 'Профиль',
      img: profile.img.startsWith(settings.imgPath) ?
              profile.img :
              settings.imgPath + profile.img,
      allowEdit: user.isCurrent,
      info: [
        ['Никнейм', profile.nickname || profile.username],
        ['Имя', profile.firstName],
        ['Фамилия', profile.lastName],
        ['Email', profile.email],
        ['Дата рождения', profile.date],
        ['Пол', profile.gender],
      ],
    }];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  }
}
