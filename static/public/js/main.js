'use strict';

import {settings} from './settings/config.js';
import createHeader from './views/header.js';
import MenuView from './views/menu.js';
// import createScoreBoard from './views/scoreboard.js';
import AuthorsView from './views/authors.js';
// import createLoginPage from './views/login.js';
// import createSignUp from './views/signup.js';
// import {createProfile} from './views/profile.js';
// import doSignOut from './signout.js';
import Router from './router.js';
import SignUpView from './views/signup.js';
import ProfileView from './views/profile.js';
import LoginView from './views/login.js';

const application = document.getElementById('application');
createHeader();

application.insertAdjacentHTML('beforeend', '<div id="main"></div>');
const main = document.getElementById('main');

const router = new Router(settings.home, main)
    .addRoute('/', new MenuView(main))
    .addRoute('authors', new AuthorsView(main))
    .addRoute('profile', new ProfileView(main))
    .addRoute('signUp', new SignUpView(main))
    .addRoute('signIn', new LoginView(main));
router.start();
