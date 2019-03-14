'use strict';

import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
import {createProfile} from './profile.js';
import doSignOut from './signout.js';
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
  exit: doSignOut,
};

application.addEventListener('click', (event) => {
  const link = event.target.closest('[data-link-type]');
  if (link === null) {
    return;
  }

  event.preventDefault();

  application.innerHTML = '';
  pages[link.dataset['linkType']]();

  addValidationOnBlur();
});
