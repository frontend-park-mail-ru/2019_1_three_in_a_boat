'use strict';

import Geometry from '../game/core/geometry.js';

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
   * @param {Number} angle - local angle
   */
  draw(angle = 0) {
    this.currentAngle = -angle;
    const vx = Math.cos(this.currentAngle) * this.radius;
    const vy = Math.sin(this.currentAngle) * this.radius;
    const x1 = Math.cos(this.currentAngle + this.alpha) * this.lineRadius;
    const y1 = Math.sin(this.currentAngle + this.alpha) * this.lineRadius;
    const x2 = Math.cos(this.currentAngle - this.alpha) * this.lineRadius;
    const y2 = Math.sin(this.currentAngle - this.alpha) * this.lineRadius;
    this.ctx.fillStyle = this.color;

    this.ctx.beginPath();
    this.ctx.moveTo(vx, vy);
    this.ctx.lineTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.closePath();
    this.ctx.fill();
    //
    // const dot = Geometry.cursorAngleToDot(-this.currentAngle);
    // this.ctx.beginPath();
    // this.ctx.arc(dot.x, dot.y, 10, 0, 2 * Math.PI);
    // this.ctx.fill();
  }
}
