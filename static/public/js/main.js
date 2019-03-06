'use strict';
import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
// import createUpdateProfile from './update.js'
import createProfile from './profile.js';
import {validate, removeHelpText, addErrors} from './validation.js';


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
  removeHelpText();

  for (let i = 0; i < inputs.length; i++) {
    const errMsgs = validate(inputs[i]);
    addErrors(inputs[i], errMsgs);
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
    inputs[i].onblur = function() {
      const errMsgs = validate(this);
      addErrors(this, errMsgs);
    };

    inputs[i].onfocus = function() {
      const helpTexts = document.getElementsByClassName(
          'form-group__help-text form-group__help-text_type_error'
      );
      for (let i = 0; i < helpTexts.length; i++) {
        const inputName = helpTexts[i].id.split(' ')[6];
        console.log(inputName);
        if (inputName === this.name) {
          helpTexts[i].parentElement.removeChild(helpTexts[i]);
          i--;
        }
      }
    };
  }
});
