/**
 * Check if input is valid
 * @param {HTMLInputElement} input
 * @return {Array} array of errors
 */
export function validate(input) {
  let errors = [];

  switch (input.type) {
    case 'password':
      errors = validatePassword(input);
      break;
    case 'email':
      errors = validateEmail(input);
  }

  return errors;
}

/**
 * Remove all help-text_type_error on the page
 */
export function removeHelpText() {
  const helpTexts = document.getElementsByClassName(
      'form-group__help-text form-group__help-text_type_error'
  );

  while (helpTexts.length) {
    helpTexts[0].parentElement.removeChild(helpTexts[0]);
  }
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
 * Validate password
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateEmail(input) {
  const errors = [];
  const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailReg.test(input.value)) {
    errors.push('Введите корректный email-адрес');
  }

  return errors;
}
