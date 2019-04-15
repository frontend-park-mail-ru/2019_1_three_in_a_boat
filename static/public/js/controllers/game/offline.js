'use strict';

import Hexagon from '../../graphics/hexagon.js';
import UserArrow from '../../graphics/arrow.js';

const MIN_SIZE = 100;

/**
 * @class OfflineGame
 */
export default class OfflineGame extends GameCore {
  /**
   * Construct offline game object
   */
  constructor() {
    super();
    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;

    document.body.appendChild(this.canvas); // добавляем canvas в DOM

    this.ctx = this.canvas.getContext('2d');
    this.baseHex = new Hexagon(this.ctx, 100, 10, 0, '#ff4d00', 0);
    this.hexagon = new Hexagon(this.ctx, 600, 10, 9, '#ff4d00', 0);
    this.arrow = new UserArrow(this.ctx, 50, 50, 90, '#fff');
  }

  /**
   * Run
   */
  run() {
  }

  /**
   * Rotate all canvas
   * @param {Number} direction, value: 1 or -1
   * @private
   */
  _rotate(direction) {
    // TODO: can be more properly cleaned. added to the to-do list
    ctx.clearRect(-100, -100, this.canvas.width * 1.5, this.canvas.height * 2);
    ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.baseHex.draw();
    this.arrow.draw(0);
    if (this.hexagon.currentSide >= MIN_SIZE) {
      this.hexagon.draw();
    } else {
      this.hexagon.setNewParameters(0, '#ff4d00');
    }
    ctx.rotate(Math.PI / 180 * 2);
    ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
  }
}