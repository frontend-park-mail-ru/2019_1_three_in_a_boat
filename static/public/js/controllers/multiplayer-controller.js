'use strict';

import GAME_MODES from '../game/mods.js';
import Game from '../game/game.js';
import GameView from '../views/game-view.js';
import ResultView from '../views/game-over-mlt-view.js';
import Controller from '../core/controller.js';
import events from '../game/core/events.js';
import bus from '../event-bus.js';
import UserService from '../models/user-service.js';
import WaitView from '../views/wait-view.js';

/**
 * @class MultiPlayerController
 */
export default class MultiPlayerController extends Controller {
  /**
   * Init game object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, false);
    this.view = new GameView(parent);
    this.resultView = new ResultView(parent);
    this.waitView = new WaitView(parent);
    this.game = null;
    this.bus = bus;
  }

  /**
   * Destructor
   */
  destructor() {
    super.destructor();
    this.game.destroy();
  }

  /**
   * Create game logic
   */
  action() {
    // TODO add auth check

    this.bus.on(events.FINISH_GAME, (state) => {
      this.destructor();
      const enemyId = 27; // должен с сервера приходить
      UserService.getUser(enemyId).then(
          (enemy) => {
            UserService.getData().then(
                (user) => {
                  console.log(user);
                  state.highScore = user.highScore === null || !user.highScore ?
                    0 : user.highScore;

                  if (state.highScore < state.score) {
                    UserService.updateScore(state.score);
                  }

                  this.destructor();
                  this.resultView.render(state, user, enemy);
                  this._initResultView();
                },
                (error) => {
                  console.log(error);
                }
            );
          });
    });

    this.game = new Game(GAME_MODES.MULTIPLAYER, this.view);
    // ожидание получения игрока
    this.waitView.render();
    // получили игрока
    // this.waitView.hide();
    this.game.start();
  }

  /**
   * Init result view
   * Add event listeners
   * @private
   */
  _initResultView() {
    const btn = document.getElementsByClassName('result-redirect__btn')[0];
    const handler = () => {
      this.resultView.parent.innerHTML = '';
      window.history.pushState({}, '', '/multi');
      window.history.pushState({}, '', '/multi');
      window.history.back();
    };

    btn.addEventListener('click', handler);
    this.events.push({item: btn, type: 'click', handler: handler});
  }
}
