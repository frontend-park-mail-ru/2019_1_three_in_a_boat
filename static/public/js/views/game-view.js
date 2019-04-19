'use strict';

import View from '../core/view.js';
import Hexagon from '../graphics/hexagon.js';
import UserArrow from '../graphics/arrow.js';
import CanvasText from '../graphics/text.js';
import {CURSOR} from '../game/core/settings.js';
const bemhtml = require('../bundle.bemhtml.js').bemhtml;

const MIN_SIZE = 100;
const color = '#ff4d00';

/**
 * @class GameView
 */
export default class GameView extends View {
  /**
   * @param {HTMLElement}parent
   */
  constructor(parent) {
    super(parent);
    this.currentScore = 0;
    this.currentTime = 0;
    this.lastFrameTime = 0;
  }

  /**
   * Render GameController
   * @param {Object} state with info about hexagons
   */
  render(state) {
    const localData = {seconds: '12:38', score: 36, record: '38:09'};
    const draw = [
      {
        block: 'game',
        mods: {main: true},
        content: [
          {
            block: 'current',
            content: [
              {
                elem: 'item',
                name: 'Время',
                value: localData.seconds,
              },
              {
                elem: 'item',
                name: 'Счет',
                value: localData.score,
              },
              {
                elem: 'item',
                name: 'Рекорд',
                value: localData.record,
              },
            ],
          },
          {
            block: 'hexagons',
            mods: {main: true},
            content: [
              {
                elem: 'game',
                attrs: {
                  id: 'game-canvas',
                  width: 950,
                  height: 800,
                },
              },
            ],
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));

    // this.canvas = document.createElement('canvas');
    this.canvas = document.getElementById('game-canvas');
    // this.canvas.width = 800;
    // this.canvas.height = 600;

    // document.body.appendChild(this.canvas); // добавляем canvas в DOM
    // console.log(this.canvas);
    this.ctx = this.canvas.getContext('2d');

    this.hexagons = []; // new Hexagon(this.ctx, 600, 10, 9, '#ff4d00');
    state.hexagons.forEach((hexagon) => {
      this.hexagons.push(
          new Hexagon(this.ctx, hexagon.side, 10,
              hexagon.sides, color, hexagon.angle)
      );
    });
    this.arrow = new UserArrow(
        this.ctx, 25, CURSOR.height, CURSOR.radius, '#fff'
    );
    this.baseHex = new Hexagon(this.ctx, 40, 10, 0, color, 0);
    this.scoreTitle = new CanvasText(
        this.ctx, 35, '#FFF', '#000', 'SCORE', 1
    );
    this.scoreOut = new CanvasText(
        this.ctx, 70, '#FFF', '#000', state.score, 1
    );
    // this.recordTitle = new CanvasText(
    //     this.ctx, 35, '#FFF', '#000', 'RECORD', -1
    // );
    // this.recordOut = new CanvasText(
    //     this.ctx, 70, '#FFF', '#000', state.highScore, -1
    // );
    this.timeOut = new CanvasText(
        this.ctx, 70, '#FFF', '#000', '00:00', 0
    );
  }

  /**
   * Render new scene
   * @param {number} now
   */
  renderScene(now) {
    const delay = now - this.lastFrameTime; // use for time mb
    this.lastFrameTime = now;
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
    this.arrow.draw(this.cursorAngle);
    this.hexagons.forEach((hexagon) => {
      hexagon.draw();
    });
    this.baseHex.draw();
    this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);
    this.timeOut.setParameters(this.currentTime);
    this.timeOut.draw();
    this.scoreTitle.draw();
    // this.recordTitle.draw();
    this.scoreOut.setParameters(this.currentScore);
    this.scoreOut.draw();
    // this.recordOut.draw();
    this.requestFrameId = requestAnimationFrame(this.renderScene.bind(this));
  }

  /**
   * Update state
   * @param {Object} state
   */
  update(state) {
    this.hexagons = [];
    state.hexagons.forEach((hexagon) => {
      this.hexagons.push(
          new Hexagon(this.ctx, hexagon.side, 10,
              hexagon.sides, color, hexagon.angle)
      );
    });

    this.cursorAngle = state.cursorAngle;
    this.arrow.currentAngle = state.cursorAngle;
    this.currentScore = state.score;
    this.currentTime = state.time;
    // если не заработает
    // this.arrow = new UserArrow(this.ctx, 50, 50, 90, '#fff');
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

  /**
   *
   */
  start() {
    this.lastFrameTime = performance.now();
    this.requestFrameId = requestAnimationFrame(this.renderScene.bind(this));
  }

  /**
   *
   */
  stop() {
    if (this.requestFrameId) {
      window.cancelAnimationFrame(this.requestFrameId);
      this.requestFrameId = null;
    }

    // this.scene.clear(); TODO
  }
}
