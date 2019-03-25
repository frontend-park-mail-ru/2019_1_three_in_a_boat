import ajax from '../ajax.js';
import createScoreBoard from './scoreboard.js';
import {settings} from '../settings/config.js';
import View from './view.js';

export default class PaginationView extends View {
  constructor(parent) {
    super(parent);
  }

  /**
   * Get array of the pages, which are showed in pagination
   * @param {int} currPage number of the current page
   * @param {int} pagesNumber number of he pages
   * @return {Array} array of elements of pagination
   */
  getNumeration(currPage, pagesNumber) {
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
        attrs: {value: currPage < pagesNumber ? currPage + 1 : -1},
      },
    );

    return numbers;
  }

  /**
   * Create pagination
   * @param {int} currPage number of the current page
   * @param {int} pagesNumber number of he pages
   */
  createPagination(currPage, pagesNumber) {
    const template = [
      {
        block: 'pagination',
        content: [],
      },
    ];
    console.log(111);

    const numbers = this.getNumeration(currPage, pagesNumber);
    numbers.forEach((number) => {
      number.elem = 'link';

      if (number.attrs.value === currPage || number.attrs.value < 1) {
        number.elemMods = {current: true};
      }

      template[0].content.push(number);
    });

    this.parent.insertAdjacentHTML('beforeend', bemhtml.apply(template));
    this.setPaginationLinks();
  }

  /**
   * Add event listener for each pagination item
   */
  setPaginationLinks() {
    const pagLinks = document.getElementsByClassName('pagination__link');

    Array.from(pagLinks).forEach((link) => {
      if (Number(link.value) < 1) {
        return;
      }

      link.addEventListener('click', this.pagesLinkHandler);
      this.events.push({item: link, type: 'click', handler: this.pagesLinkHandler});
    });

    application.addEventListener('click', clickHandler);
    this.events.push({item: application, type: 'click', handler: clickHandler});
  }

  /**
   * Handler for pagination link's click event
   * @param {Event} event
   */
  pagesLinkHandler(event) {
    event.preventDefault();
    const path = settings.url + '/users?sort=-HighScore&page='
      + (event.target.value - 1);

    ajax.doGet({path}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        this.parent.innerHTML = '';
        createScoreBoard(data);
      });
    });
  }
}
