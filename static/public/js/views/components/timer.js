'use strict';
const bemhtml = require('../../bundle.bemhtml.js').bemhtml;
/**
 * show timer for player
 * @param {HTMLElement} parent
 * @param {Number} sec - delay
 */
export default function timer(parent, sec) {
  const template = [
    {
      block: 'timer',
      content: [
        {
          elem: 'window',
          content: [
            {
              elem: 'title',
              content: [''],
            },
            {
              elem: 'counter',
              content: [sec],
            },
          ],
        },
      ],
    },
  ];
  parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
  let seconds = sec;
  const counter = parent.getElementsByClassName('timer__counter')[0];
  const intervalId = setInterval(() => {
    --seconds;
    counter.innerText = seconds;
    if (seconds === 0) {
      clearInterval(intervalId);
      const timerBlock = parent.getElementsByClassName('timer')[0];
      timerBlock.remove();
    }
  }, 1000);
}
