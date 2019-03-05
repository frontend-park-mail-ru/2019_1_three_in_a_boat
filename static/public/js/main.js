'use strict';
import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
import createUpdateProfile from './update.js';


const application = document.getElementById('application');

createMenu();

const pages = {
  menu: createMenu,
  signIn: createLoginPage,
  signUp: createSignUp,
  authors: createAuthors,
  leaders: createScoreBoard,
};

application.addEventListener('click', function(event) {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  event.preventDefault();
  const link = event.target;

  application.innerHTML = '';

  pages[link.type]();
});
