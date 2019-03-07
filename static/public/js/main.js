'use strict';
import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
// import createUpdateProfile from './update.js'
import createProfile from './profile.js';
import {validate, addErrors, clearErrors} from './validation.js';

const application = document.getElementById('application');

createMenu();

const pages = {
  menu: createMenu,
  signIn: createLoginPage,
  signUp: createSignUp,
  authors: createAuthors,
  leaders: createScoreBoard,
  profile: createProfile,
};

application.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputs = document.getElementsByTagName('input');

  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].attributes['checkable']) {
      continue;
    }

    clearErrors(inputs[i]);
    const errMsgs = validate(inputs[i]);
    if (errMsgs.length > 0) {
      addErrors(inputs[i], errMsgs);
    }
  }
});

application.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  event.preventDefault();
  const link = event.target;

  application.innerHTML = '';
  pages[link.type]();

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
});
