import OfflineGame from './core/offline-core.js';
import GameControllers from './controllers.js';
import GAME_MODES from './mods.js';
import GameScene from "./game-scene/game-scene";

/**
 *
 */
export default class Game {
  /**
   * GameController class constructor
   * @param {Object} mode
   * @param {View} view
   */
  constructor(mode, view) {
    let GameConstructor = null;
    switch (mode) {
      case GAME_MODES.ONLINE: {
        // TODO add online
        GameConstructor = OfflineGame;
        break;
      }
      case GAME_MODES.OFFLINE: {
        GameConstructor = OfflineGame;
        break;
      }
      default:
        throw new Error('Invalid game mode ' + mode);
    }

    // this.gameScene = new GameScene(canvas); TODO
    this.gameControllers = new GameControllers();
    this.gameCore = new GameConstructor(this.gameControllers, view);
  }

  /**
   * Start game
   */
  start() {
    this.gameCore.start();
  }

  /**
   * GameController destructor
   */
  destroy() {
    this.gameCore.destroy();
  }
}
