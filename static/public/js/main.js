'use strict';

require('./bundle.bemhtml.js');
require('./bundle.bemtree.js');
import {settings} from './settings/config.js';
import createHeader from './views/header.js';
import Router from './core/router.js';
import MenuController from './controllers/menu-controller.js';
import AuthorsController from './controllers/authors-controller.js';
import ScoreboardController from './controllers/scoreboard-controller.js';
import ProfileController from './controllers/profile-controller.js';
import SignUpController from './controllers/signup-controller.js';
import LoginController from './controllers/login-controller.js';
import LogoutController from './controllers/logout-controller.js';
import UpdateController from './controllers/update-controller.js';
import GameMenuController from './controllers/game-menu-controller.js';
import GameOverController from './controllers/game-over-controller.js';
import GameOverMltController from './controllers/game-over-mlt-controller.js';
import GameController from './controllers/game-controller.js';
import '../css/style.css';

const application = document.getElementById('application');
createHeader();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js');
}

application.insertAdjacentHTML('beforeend', '<div id="main"></div>');
const main = document.getElementById('main');

const router = new Router(settings.home, application)
    .addRoute('/', new MenuController(main))
    .addRoute('authors', new AuthorsController(main))
    .addRoute('leaders', new ScoreboardController(main))
    .addRoute('profile', new ProfileController(main))
    .addRoute('signup', new SignUpController(main))
    .addRoute('signin', new LoginController(main))
    .addRoute('exit', new LogoutController(main))
    .addRoute('authors', new AuthorsController(main))
    .addRoute('profile/update', new UpdateController(main))
    .addRoute('single', new GameController(main))
    .addRoute('multi', new GameOverMltController(main))
    .addRoute('play', new GameMenuController(main));

router.start();
