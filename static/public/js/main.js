'use strict';
import createMenu from './menu.js';
import createScoreBoard from './scoreboard.js';
import createAuthors from './authors.js';
import createLoginPage from './login.js';
import createSignUp from './signup.js';
// import createUpdateProfile from './update.js'
import {validate, removeHelpText} from './validation.js';

'./validation.js';


const application = document.getElementById('application');

createMenu();

const pages = {
  menu: createMenu,
  signIn: createLoginPage,
  signUp: createSignUp,
  authors: createAuthors,
  leaders: createScoreBoard,
};

application.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputs = document.getElementsByTagName('input');
  removeHelpText();

  for (let i = 0; i < inputs.length; i++) {
    const errMsgs = validate(inputs[i]);
    errMsgs.forEach((msg) => {
      if (msg.trim() !== '') {
        const errTemplate = {
          block: 'form-group',
          elem: 'help-text',
          elemMods: {type: 'error'},
          content: [msg],
          for: inputs[i].name,
        };

        inputs[i].parentElement.insertAdjacentHTML(
            'afterend', bemhtml.apply(errTemplate)
        );
      }
    });
  }
});

application.addEventListener('click', function(event) {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  event.preventDefault();
  const link = event.target;

  application.innerHTML = '';

  pages[link.type]();
});
