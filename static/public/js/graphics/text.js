'use strict';

const TEXT_SIZE = 30;

/**
 * @class CanvasText
 */
export default class CanvasText {
  /**
   * @constructor
   * @param {Object} ctx - context
   * @param {Number} pos - Y-text level
   * @param {string} color - text color
   * @param {string} background - background color
   * @param {string} text - input text
   * @param {Number} textStatus - simple OX orientation
   *                [ left: -1, center: 0, right: 1 ]
   */
  constructor(ctx, pos, color, background, text = '', textStatus = 0) {
    this.ctx = ctx;
    this.position = pos;
    this.color = color;
    this.background = background;
    this.text = text;
    this.simplePos = textStatus;
  }

  /**
   * Update text and background
   * @param {string} text - new text
   * @param {string} background - new background color
   */
  setParameters(text, background = undefined) {
    this.text = text;
    if (background !== undefined) {
      this.background = background;
    }
  }

  /**
   * Draw text in canvas
   */
  draw() {
    this.ctx.font = `${TEXT_SIZE}pt  Anurati, cursive`;
    const textWidth = this.ctx.measureText(this.text).width;
    this.ctx.fillStyle = this.background;
    let x = 0;
    switch (+this.simplePos) {
      case -1: {
        x = 10;
        break;
      }
      case 1: {
        x = this.ctx.canvas.width - textWidth - 10;
        break;
      }
      default: {
        x = (this.ctx.canvas.width - textWidth) / 2;
      }
    }
    this.ctx.fillRect(
        x,
        this.position - TEXT_SIZE,
        textWidth,
        TEXT_SIZE);
    this.ctx.fillStyle = this.color;
    this.ctx.fillText(this.text, x, this.position);
  }
}
