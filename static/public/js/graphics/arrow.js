'use strict';
/**
 * @class UserArrow
 */
export default class UserArrow {
  /**
   * Construct user arrow element in canvas
   * @param {Object} ctx
   * @param {Number} base
   * @param {Number} height
   * @param {Number} side
   * @param {string} color
   */
  constructor(ctx, base, height, side, color) {
    this.ctx = ctx;
    this.color = color;
    this.currentAngle = 0;
    side /= 1.5;
    this.radius = side + height;
    this.lineRadius = Math.sqrt(base * base / 4 + side * side);
    this.alpha = Math.asin(base / 2 / this.lineRadius);
  }

  /**
   * Draw arrow
   * @param {Number} angel - local angel
   */
  draw(angel) {
    this.currentAngle = angel;
    const vx = Math.cos(this.currentAngle) * this.radius;
    const vy = Math.sin(this.currentAngle) * this.radius;
    const x1 = Math.cos(this.currentAngle + this.alpha) * this.lineRadius;
    const y1 = Math.sin(this.currentAngle + this.alpha) * this.lineRadius;
    const x2 = Math.cos(this.currentAngle - this.alpha) * this.lineRadius;
    const y2 = Math.sin(this.currentAngle - this.alpha) * this.lineRadius;
    console.log(vx, vy, x1, y1, x2, y2);
    this.ctx.fillStyle = this.color;

    console.log(vx, vy);
    this.ctx.beginPath();
    this.ctx.moveTo(vx, vy);
    this.ctx.lineTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.fill();
  }
}
