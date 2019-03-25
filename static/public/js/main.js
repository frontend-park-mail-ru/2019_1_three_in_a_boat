'use strict';

import {settings} from './settings/config.js';
import createHeader from './views/header.js';
import MenuView from './views/menu.js';
import ScoreboardView from './views/scoreboard.js';
import AuthorsView from './views/authors.js';
// import createLoginPage from './views/login.js';
// import createSignUp from './views/signup.js';
// import {createProfile} from './views/profile.js';
// import doSignOut from './signout.js';
import Router from './router.js';

const application = document.getElementById('application');
createHeader();

application.insertAdjacentHTML('beforeend', '<div id="main"></div>');
const main = document.getElementById('main');

const router = new Router(settings.home, application)
    .addRoute('/', new MenuView(main))
    .addRoute('authors', new AuthorsView(main))
    .addRoute('leaders', new ScoreboardView(main));
router.start();
