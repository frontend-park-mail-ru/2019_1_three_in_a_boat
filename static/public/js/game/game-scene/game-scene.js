'use strict';
import bus from '../../event-bus.js';
/**
 * @class GameScene
 */
export default class GameScene {
  /**
   * Construct Game Scene
   * @param {HTMLElement} canvas
   */
  constructor(canvas) {
    this.bus = bus;
    this.canvas = canvas;
    const ctx = canvas.getContext('2d');
    this.ctx = ctx;
    this.scene = new Scene(ctx);
    this.state = null;
    this.requestFrameId = null;

    this.lastFrameTime = 0;

    this.field = [];
    this.me = null;

    this.renderScene = this.renderScene.bind(this);


  }

}