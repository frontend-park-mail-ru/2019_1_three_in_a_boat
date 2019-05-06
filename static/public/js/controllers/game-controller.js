'use strict';

import GAME_MODES from '../game/mods.js';
import Game from '../game/game.js';
import GameView from '../views/game-view.js';
import ResultView from '../views/game-over-single-view.js';
import Controller from '../core/controller.js';
import events from '../game/core/events.js';
import bus from '../event-bus.js';
import UserService from '../models/user-service.js';

/**
 * The main class GameController
 */
export default class GameController extends Controller {
  /**
   * Init game object
   * @param {HTMLElement} parent
   */
  constructor(parent) {
    super(parent, false);
    this.view = new GameView(parent);
    this.resultView = new ResultView(parent);
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
    let mode = '';
    if (navigator.onLine) {
      mode = GAME_MODES.ONLINE;
    } else {
      mode = GAME_MODES.OFFLINE;
    }

    this.bus.on(events.FINISH_GAME, (state) => {
      this.destructor();
      UserService.getData().then(
          (user) => {
            if (user) {
              state.highScore = user.highScore === null || !user.highScore? 0:
                user.highScore;

              if (state.highScore < state.score) {
                UserService.updateScore(state.score);
              }
            }
            this.destructor();
            this.resultView.render(state, mode);
            this._initResultView();
          },
          (error) => {
            console.log(error);
          }
      );
    });

    this.game = new Game(mode, this.view);
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
      window.history.pushState({}, '', '/single');
      window.history.pushState({}, '', '/single');
      window.history.back();
    };

    btn.addEventListener('click', handler);
    this.events.push({item: btn, type: 'click', handler: handler});
  }
}
