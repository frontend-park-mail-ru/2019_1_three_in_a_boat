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

  const {email, nickname, uid: id} = user;
  let {firstName, lastName, gender, birthDate: date} = user;

  firstName = firstName !== null? firstName: '';
  lastName = lastName !== null? lastName: '';
  gender = gender !== null? genderToStr[gender]: '';
  date = date !== null? date.split('-').join('.'): '';

  return {firstName, lastName, gender, date, email, nickname, id};
}
