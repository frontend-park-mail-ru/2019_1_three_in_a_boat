'use strict';

import View from '../core/view.js';
import Hexagon from '../graphics/hexagon.js';
import UserArrow from '../graphics/arrow.js';
import hexagon from "../graphics/hexagon";

const MIN_SIZE = 100;
const color = '#ff4d00';

/**
 * @class GameView
 */
export default class GameView extends View {
  /**
   *
   * @param {HTMLElement}parent
   */
  constructor(parent) {
    super(parent);
  }

  /**
   * Render GameController
   * @param {Object} state with info about hexagons
   */
  render(state) {
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
            addAttr: serverData,
            content: [
              {
                elem: 'user',
                content: localData.angel,
              },
            ],
          },
        ],
      },
    ];

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(draw));

    this.canvas = document.createElement('canvas');
    this.canvas.width = 800;
    this.canvas.height = 600;

    document.body.appendChild(this.canvas); // добавляем canvas в DOM

    this.ctx = this.canvas.getContext('2d');

    this.hexagons = []; // new Hexagon(this.ctx, 600, 10, 9, '#ff4d00');
    state.hexagons.forEach((hexagon) => {
      this.hexagons.push(
          new Hexagon(this.ctx, 10, hexagon.side, hexagon.sides, color)
      );
    });
    this.arrow = new UserArrow(this.ctx, 50, 50, 90, '#fff');
  }

  update(state) {
    this.hexagons = []; // new Hexagon(this.ctx, 600, 10, 9, '#ff4d00');
    state.hexagons.forEach((hexagon) => {
      this.hexagons.push(
          new Hexagon(this.ctx, 10, hexagon.side, hexagon.sides, color)
      );
    });

    const angle = state.cursorAngle;


    this.arrow = new UserArrow(this.ctx, 50, 50, 90, '#fff');
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
    this.requestFrameId = requestAnimationFrame(this.renderScene);
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
