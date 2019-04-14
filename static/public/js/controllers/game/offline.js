'use strict';

import Hexagon from '../../graphics/hexagon.js';

/**
 * @class OfflineGame
 */
export default class OfflineGame extends GameCore {
  /**
   * Construct offline game object
   */
  constructor() {
    super();
    this.baseHex = new Hexagon(ctx, 100, 0, '#ff4d00');
  }
  run() {

  }

  /**
   * Rotate all canvas
   * @param {Number} direction, value: 1 or -1
   * @private
   */
  _rotate(direction) {
    // TODO: can be more properly cleaned. added to the to-do list
    ctx.clearRect(-100, -100, canvas.width * 1.5, canvas.height * 2);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (hexagon.currentSide >= MIN_SIZE) {
      hexagon.draw();
    } else {
      console.log('I want to be min');
      hexagon.setNewParameters(0, 0, '#ff4d00');
    }
    ctx.rotate(Math.PI / 180 * 2);
    ctx.translate(-canvas.width / 2, -canvas.height / 2);
  }
}