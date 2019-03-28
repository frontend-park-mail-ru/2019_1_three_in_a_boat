import {serverErrors} from './settings/serverErrors.js';

/**
 * Check if input is valid
 * @param {HTMLInputElement} input
 * @return {Array} array of errors
 */
function validate(input) {
  if (input.value === '') {
    if (input.required) {
      return ['Заполните это поле'];
    }
    return [];
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
      break;
    case 'username':
      errors = validateUserName(input);
  }

  return errors;
}

/**
 * Add help-text with error after input
 * @param {HTMLInputElement}input
 * @param {Array}errMsgs
 */
function addErrors(input, errMsgs) {
  if (errMsgs.length !== 0) {
    const msg = errMsgs.join('<br>');
    const helpText = document.getElementById('help_' + input.name);
    helpText.innerHTML = msg;
    helpText.classList.remove('form-group__help-text_hidden');
    helpText.classList.add('form-group__help-text_type_error');
  }
}

/**
 * Hide error under the input
 * @param {HTMLInputElement}input
 */
function clearErrors(input) {
  const helpText = document.getElementById('help_' + input.name);
  helpText.classList.remove('form-group__help-text_type_error');
  helpText.classList.add('form-group__help-text_hidden');
  helpText.innerHTML = '';
}

/**
 * Validate password
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validatePassword(input) {
  const errors = [];

  if (input.value.length < 8) {
    errors.push('Пароль должен содержать не менее 8 символов');
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
 * @return {Array} array of serverErrors
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
  if (input.value.length > 256) {
    errors.push('Длина не должна превышать 256 символов');
  }

  return errors;
}

/**
 * Validate name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateName(input) {
  const errors = [];

  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    errors.push('Имя должно начинаться с заглавной буквы');
  }
  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}

/**
 * Validate last name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateLastName(input) {
  const errors = [];

  if (!/^[A-ZА-ЯЁ]/.test(input.value)) {
    errors.push('Фамилия должна начинаться с заглавной буквы');
  }
  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}

/**
 * Validate last name
 * @param {HTMLInputElement}input input block
 * @return {Array} array of error messages
 */
function validateUserName(input) {
  const errors = [];

  if (!/^[A-Za-z0-9]+$/.test(input.value)) {
    errors.push('Username может содержать только цифры и латинские буквы');
  }
  if (input.value.length > 32) {
    errors.push('Длина не должна превышать 32 символа');
  }

  return errors;
}

/**
 * Add validation on blur event for every input on page
 */
export function addValidationOnBlur() {
  const inputs = document.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].attributes['checkable']) {
      continue;
    }

    inputs[i].onblur = function() {
      const errMsgs = validate(this);
      addErrors(this, errMsgs);
    };

    inputs[i].onfocus = function() {
      clearErrors(this);
    };
  }
}

/**
 * Validate form
 * @param {HTMLFormElement}form form to validate
 * @return {boolean} true if form is okay
 */
export function validateForm(form) {
  console.log(form);
  const inputs = form.getElementsByTagName('input');
  let isOk = true;

  for (const input of inputs) {
    const expectedId = form.id + '_' + input.name;
    if (!input.attributes['checkable'] || input.id !== expectedId) {
      continue;
    }

    clearErrors(input);
    const errMsgs = validate(input);
    if (errMsgs.length > 0) {
      addErrors(input, errMsgs);
      isOk = false;
    }
  }

  return isOk;
}

/**
 * Check server response and add errors to help-texts
 * @param {XMLHttpRequestResponseType} response
 * @param {HTMLFormElement} form
 * @return {boolean}
 */
export function checkResponse(response, form) {
  if (response.status === 'ok') {
    return true;
  }

  const fields = response.data.fields;
  if (fields.password !== undefined && fields.password.errors) {
    const errors = [];
    fields.password.errors.forEach((error) => {
      errors.push(serverErrors[error]);
    });
    if (errors) {
      addErrors(form['password'], errors);
    }
  }

  if (fields.username !== undefined && fields.username.errors) {
    const errors = [];
    fields.username.errors.forEach((error) => {
      errors.push(serverErrors[error]);
    });
    addErrors(form['username'], errors);
  }

  if (fields.name !== undefined && fields.name.errors) {
    const errors = [];
    fields.name.errors.forEach((error) => {
      errors.push(serverErrors[error]);
    });
    addErrors(form['email'], errors);
  }

  if (fields.email !== undefined && fields.email.errors) {
    const errors = [];
    fields.email.errors.forEach((error) => {
      errors.push(serverErrors[error]);
    });
    addErrors(form['email'], errors);
  }

  return false;
}
