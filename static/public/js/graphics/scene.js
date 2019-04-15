'use strict';

import UserArrow from './arrow.js';

/**
 * @class Scene
 */
export default class Scene {
  /**
   * Construct Scene obj
   * @param {CanvasRenderingContext2D} ctx
   * @constructor
   */
  constructor(ctx) {
    this.ctx = ctx;
    this.hexagons = [];
    this.arrow = new UserArrow(ctx, 30, 30, 100, 'fff');
    this.baseHexagon = NaN;
    this._id = 0;
  }

  /**
   * Не знаю зачем это надо, но пусть
   * @return {string}
   */
  id() {
    return `#${this._id++}`;
  }

  /**
   * Тоже пока хз зачем это надо
   * @param {Object} figure
   * @return {string}
   */
  push(figure) {
    const id = this.id();
    this.hexagons[id] = (figure);
    return id;
  }

  /**
   * --
   * @param angle
   */
  setAngle(angle) {
    this.arrow.currentAngle = angle;
  }

  /**
   * Render Scene
   */
  render() {
    const ctx = this.ctx;
    ctx.clearRect(-100, -100, ctx.canvas.width * 1.5, ctx.canvas.height * 2);
    ctx.fillStyle = '#000';
    ctx.fillRect(
        -100,
        -200,
        ctx.canvas.width + ctx.canvas.height,
        ctx.canvas.height * 2 + ctx.canvas.width);
    ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
    this.arrow.draw(0);
    this.baseHex.draw(1.57);
    this.hexagons.forEach((hexagon) => hexagon.draw());
    // if (this.hexagon.currentSide >= MIN_SIZE) {
    //   this.hexagon.draw(0);
    //   this.hexagon.fallDown();
    // } else {
    //   console.log('I want to be min');
    //   this.hexagon.setNewParameters(42,'#ff4d00');
    // }
    // ctx.rotate(Math.PI / 180 * 2);
    ctx.translate(-ctx.canvas.width / 2, -ctx.canvas.height / 2);
  }

  remove(id) {
    const figure = this.hexagons.pop();

    delete this.figures[id];
    if (Object.keys(this.figures).length === 0) {
      console.info('Scene is empty!');

    }
