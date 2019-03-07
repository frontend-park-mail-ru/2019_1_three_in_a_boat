/**
 * Check if input is valid
 * @param {HTMLInputElement} input
 * @return {Array} array of errors
 */
export function validate(input) {
  if (input.required && input.value === '') {
    return ['Заполните это поле'];
  }
  let errors = [];

  switch (input.attributes['checktype'].value) {
    case 'password':
      errors = validatePassword(input);
      break;
    case 'repeatPassword':
      errors = validateRepeatPassword(input);
      break;
    case 'email':
      errors = validateEmail(input);
      break;
    case 'name':
      errors = validateName(input);
      break;
    case 'lastName':
      errors = validateLastName(input);
  }

  return errors;
}

/**
 * Add help-text with error after input
 * @param {HTMLInputElement}input
 * @param {Array}errMsgs
 */
export function addErrors(input, errMsgs) {
  const msg = errMsgs.join('<br>');
  const helpText = document.getElementById('help_' + input.name);
  helpText.innerHTML = msg;
  helpText.classList.remove('form-group__help-text_type_hidden');
  helpText.classList.add('form-group__help-text_type_error');
}

/**
 * Hide error under the input
 * @param {HTMLInputElement}input
 */
export function clearErrors(input) {
  const helpText = document.getElementById('help_' + input.name);
  helpText.classList.remove('form-group__help-text_type_error');
  helpText.classList.add('form-group__help-text_type_hidden');
  helpText.innerHTML = '';
}

/**
 * Validate password
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validatePassword(input) {
  const errors = [];

  if (input.value.length < 4) {
    errors.push('Пароль должен содержать не менее 4х символов');
  }
  if (!/[0-9]/.test(input.value)) {
    errors.push('Пароль должен содержать цифры');
  }
  if (!/[A-z]/.test(input.value)) {
    errors.push('Пароль должен содержать латинские буквы');
  }
  if (!/^[\w\dA-z]+$/.test(input.value)) {
    errors.push('Пароль должен состоять из цифр и латинских букв');
  }

  return errors;
}

/**
 * Validate passport repeat field
 * @param {HTMLInputElement}input
 * @return {Array} array of errors
 */
function validateRepeatPassword(input) {
  const formId = input.id.split('_')[0];
  const password = document.getElementById(formId + '_password');
  if (input.value !== password.value) {
    return ['Введенное значение не совпадает с паролем'];
  }
  return [];
}

/**
 * Validate email
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateEmail(input) {
  const errors = [];
  const emailReg = RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\' +
    '[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}' +
    '\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
  if (!emailReg.test(input.value)) {
    errors.push('Введите корректный email-адрес');
  }

  return errors;
}

/**
 * Validate name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateName(input) {
  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    return ['Имя должно начинаться с заглавной буквы'];
  }

  return [];
}

/**
 * Validate last name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateLastName(input) {
  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    return ['Фамилия должна начинаться с заглавной буквы'];
  }

  return [];
}

