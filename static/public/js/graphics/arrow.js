'use strict';
/**
 * @class UserArrow
 */
export default class UserArrow {
  /**
   * Construct user arrow element in canvas
   * @param {Object} ctx
   * @param {Number} width
   * @param {Number} height
   * @param {Number} side
   * @param {string} color
   */
  constructor(ctx, width, height, side, color) {
    this.ctx = ctx;
    this.color = color;
    this.width = width;
    this.height = height;
    this.currentAngle = 0;
    this.radius = side;
  }

  /**
   * Draw arrow
   * @param {Number} angel - local angel
   */
  draw(angel) {
    this.currentAngle = angel;
    const vx = Math.cos(this.currentAngle) * this.radius;
    const vy = Math.sin(this.currentAngle) * this.radius;
    this.ctx.fillStyle = '#fff';
    this.ctx.beginPath();
    this.ctx.moveTo(vx, vy);
    // пока что не знаю, как отрисовать перпендикулярно касательной
    this.ctx.lineTo(vx - 30, vy + 15);
    this.ctx.lineTo(vx - 30, vy - 15);
    this.ctx.fill();
  }
}
