'use strict';

import GAME_MODES from '../game/mods.js';
import Game from '../game/game.js';
import MultGameView from '../views/mult-game-view.js';
import ResultView from '../views/game-over-mlt-view.js';
import Controller from '../core/controller.js';
import events from '../game/core/events.js';
import bus from '../event-bus.js';
import UserService from '../models/user-service.js';
import WaitView from '../views/wait-view.js';
import timer from '../views/components/timer.js';

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
    this.view = new MultGameView(parent);
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
      UserService.getUser(state.enemyId).then(
          (enemy) => {
            UserService.getData().then(
                (user) => {
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
    bus.on(events.ROOM_FULL, () => {
      const btn = this.parent.getElementsByClassName(
          'offline-msg__btn_wait')[0];
      btn.removeEventListener('click', this.events['handler']);
      this.waitView.hide();
      timer(this.parent, 3);
    });
    this.waitView.render();
    this._initWaitView();
    this.game = new Game(GAME_MODES.MULTIPLAYER, this.view);
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

  /**
   * Init wait view handlers
   * Add event listeners
   * @private
   */
  _initWaitView() {
    const btn = document.getElementsByClassName('offline-msg__btn_wait')[0];
    const handler = () => {
      this.resultView.parent.innerHTML = '';
      window.history.pushState({}, '', '/play');
      window.history.pushState({}, '', '/play');
      window.history.back();
    };

    btn.addEventListener('click', handler);
    this.events.push({item: btn, type: 'click', handler: handler});
  }
}
