import {settings} from './settings/config.js';

/**
 * Transform json of user to readable format
 * @param {Object} user
 * @return {Object} user json
 */
export function parseUser(user) {
  const genderToStr = {
    male: 'Мужской',
    female: 'Женский',
    other: 'Другой',
    null: '',
  };

  const {email, username: nickname, highScore, uid: id} = user;
  let {gender, img} = user;
  gender = gender !== null ? genderToStr[gender] : '';
  img = settings.imgPath + img;

  return {gender, email, nickname, id, img, highScore};
}
