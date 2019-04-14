'use strict';

import View from '../core/view.js';

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
   * @params {Array, Array} array with info about hexagons
   */
  render(localData, serverData) {
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
  }
}
