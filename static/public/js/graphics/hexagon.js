'use strict';

import Geometry from '../game/core/geometry.js';

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
    const lines = Geometry.convertHexagonToLines({
      side: this.side,
      sides: this.sidesMask,
      angle: this.currentAngle,
    });

    lines.forEach((_, pos) => {
      if (lines[pos]) {
        lines[pos] = Geometry.rotateLine(
            lines[pos].first, lines[pos].second, this.currentAngle
        );
      }
    });

    for (let i = 0; i < lines.length; ++i) {
      const line = lines[i];
      if (line) {
        if (i === 0) {
          this.ctx.moveTo(line.first.x, line.first.y);
        }
        this.ctx.lineTo(line.second.x, line.second.y);
      } else if (i < lines.length - 1 && lines[i + 1]) {
        this.ctx.moveTo(lines[i + 1].first.x, lines[i + 1].first.y);
      }
    }

    // this.ctx.restore();
    if (!this.sidesMask) {
      this.ctx.closePath();
    }
    this.ctx.stroke();
  }
}
