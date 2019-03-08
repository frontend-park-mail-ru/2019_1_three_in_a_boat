'use strict';
import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
import createProfile from './profile.js';
import {addValidationOnBlur} from './validation.js';

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

application.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  event.preventDefault();
  const link = event.target;

  application.innerHTML = '';
  pages[link.type]();

  addValidationOnBlur();
});
