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

  return {
    email: user.email,
    firstName: user.firstName !== null? user.firstName: '',
    lastName: user.lastName !== null? user.lastName: '',
    gender: user.gender !== null? genderToStr[user.gender]: '',
    nickname: user.username,
    date: user.birthDate === null? '': user.birthDate.split('-').join('.'),
    id: user.uid,
  };
}
