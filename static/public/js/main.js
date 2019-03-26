'use strict';

import {settings} from './settings/config.js';
import createHeader from './views/header.js';
import Router from './core/router.js';
import MenuController from './controllers/menu-controller.js';
import AuthorsController from './controllers/authors-controller.js';

const application = document.getElementById('application');
createHeader();

application.insertAdjacentHTML('beforeend', '<div id="main"></div>');
const main = document.getElementById('main');

const router = new Router(settings.home, main)
    .addRoute('/', new MenuController(main))
    .addRoute('authors', new AuthorsController(main));
router.start();
