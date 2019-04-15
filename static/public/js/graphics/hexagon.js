'use strict';

const FALL_SPEED = 1;
const FALL_SIZE = 5;

/**
 * @class Hexagon
 */
export default class Hexagon {
  /**
   * Create Hexagon in canvas
   * @param {Object} ctx
   * @param {Number} side
   * @param {Number} lineWidth
   * @param {Number} emptySides
   * @param {string} color
   * @param {Number} angle
   */
  constructor(ctx, side, lineWidth, emptySides, color, angle) {
    this.side = side;
    this.currentSide = side;
    this.ctx = ctx;
    this.sidesMask = emptySides;
    this.lineWidth = lineWidth;
    this.currentAngle = angle;
    this.emptySides = new Array(6);
    this.color = color;
    this._parseMask();
  }

  /**
   * Set parameters for new hexagon
   * @param {Number} emptySides
   * @param {string} color
   */
  setNewParameters(emptySides, color) {
    this.currentSide = this.side;
    this.sidesMask = emptySides;
    this.emptySides = [];
    this.color = color;
    this._parseMask();
  }

  /**
   * Parses mask from server or client to detect blank sides.
   * @private
   */
  _parseMask() {
    let copyNum = this.sidesMask;
    for (let i = 0; i < 6 && copyNum; ++i) {
      this.emptySides[i] = (copyNum & 1);
      // console.log(copyNum);
      copyNum >>= 1;
    }
  }

  /**
   * Reduces the sides size
   */
  fallDown() {
    this.currentSide -= FALL_SPEED * FALL_SIZE;
  }

  /**
   * Draw hexagon
   */
  draw() {
    this.ctx.beginPath();
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.strokeStyle = this.color;
    // let x = -this.currentSide / 2 * Math.sin(this.currentAngle);
    // let y = this.currentSide / 2 * Math.cos(this.currentAngle);
    // this.ctx.moveTo(x, y);
    for (let i = 1; i < 7; ++i) {
      const localAngle = (2 * Math.PI) / 6 * (i - 2) - this.currentAngle;
      const x = this.currentSide / 2 * Math.cos(localAngle);
      const y = this.currentSide / 2 * Math.sin(localAngle);
      if (this.emptySides[i - 1] || (i - 2 >= 0 && this.emptySides[i - 1])) {
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
      }
    }
    this.ctx.restore();
    if (!this.sidesMask) {
      this.ctx.closePath();
    }
    this.ctx.stroke();
  }
}
