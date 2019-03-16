import ajax from './ajax.js';
import createScoreBoard from './scoreboard.js';
import {settings} from './settings/config.js';

// Array for collecting events
const events = [];

/**
 * Get array of the pages, which are showed in pagination
 * @param {int} currPage number of the current page
 * @param {int} pagesNumber number of he pages
 * @return {Array} array of elements of pagination
 */
function getNumeration(currPage, pagesNumber) {
  const numbers = [
    {content: 'Назад', attrs: {value: currPage - 1}},
    {content: 1, attrs: {value: 1}},
  ];
  if (pagesNumber >= 2) {
    numbers.push({content: 2, attrs: {value: 2}});
  }
  if (currPage > 5) {
    numbers.push({content: '...', attrs: {value: 1}});
  }

  for (let i = currPage - 2; i <= currPage + 2 && i <= pagesNumber - 2; i++) {
    if (i > 2) {
      numbers.push({content: i, attrs: {value: i}});
    }
  }

  if (currPage + 2 < pagesNumber - 2) {
    numbers.push(
        {content: '...', attrs: {value: 1}},
        {content: pagesNumber - 1, attrs: {value: pagesNumber - 1}},
        {content: pagesNumber, attrs: {value: pagesNumber}},
    );
  } else if (currPage + 2 < pagesNumber - 1) {
    numbers.push(
        {content: pagesNumber - 1, attrs: {value: pagesNumber - 1}},
        {content: pagesNumber, attrs: {value: pagesNumber}},
    );
  } else if (currPage + 2 < pagesNumber) {
    numbers.push(
        {content: pagesNumber, attrs: {value: pagesNumber}},
    );
  }
  numbers.push(
      {
        content: 'Вперед',
        attrs: {value: currPage < pagesNumber? currPage + 1: -1},
      },
  );

  return numbers;
}

/**
 * Create pagination
 * @param {int} currPage number of the current page
 * @param {int} pagesNumber number of he pages
 */
export default function createPagination(currPage, pagesNumber) {
  const template = [
    {
      block: 'pagination',
      content: [],
    },
  ];

  const numbers = getNumeration(currPage, pagesNumber);
  numbers.forEach((number) => {
    number.elem = 'link';

    if (number.attrs.value === currPage || number.attrs.value < 1) {
      number.elemMods = {current: true};
    }

    template[0].content.push(number);
  });

  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(template));

  setPaginationLinks();
}

/**
 * Add event listener for each pagination item
 */
function setPaginationLinks() {
  const pagLinks = document.getElementsByClassName('pagination__link');

  Array.from(pagLinks).forEach((link) => {
    if (Number(link.value) < 1) {
      return;
    }

    link.addEventListener('click', pagesLinkHandler);
    events.push({item: link, type: 'click', handler: pagesLinkHandler});
  });

  application.addEventListener('click', clickHandler);
  events.push({item: application, type: 'click', handler: clickHandler});
}

/**
 * Calls removeListeners with click on some link
 * @param {Event} event
 */
function clickHandler(event) {
  const link = event.target.closest('a');
  if (link === null && event.target.tagName !== 'Button' ) {
    return;
  }
  removeListeners();
}

/**
 * Handler for pagination link's click event
 * @param {Event} event
 */
function pagesLinkHandler(event) {
  event.preventDefault();
  removeListeners();
  const path = settings.url + '/users?sort=-HighScore&page='
      + (link.value - 1);

  ajax.doGet({path}).then((response) => {
    if (response.status > 499) {
      alert('Server error');
      return;
    }

    response.json().then((data) => {
      application.innerHTML = '';
      createScoreBoard(data);
    });
  });
}

/**
 * Remove all event listeners
 */
function removeListeners() {
  while (events.length) {
    const event = events.pop();
    event.item.removeEventListener(event.type, event.handler);
  }
}
