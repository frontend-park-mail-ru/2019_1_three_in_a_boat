import createHeader from './header.js';
import {settings} from './settings/config.js';
import ajax from './ajax.js';

/**
 * create Page with Authors
 */
export default function createAuthors(authors) {
  createHeader();

  if (authors) {
    const data = JSON.parse(JSON.stringify(authors));
    const bemAuthors = [];

    Array.from(data).forEach((author) => {
      const {name, devInfo, img, description} = author;
      bemAuthors.push({name, devInfo, img, description});
    });

    const draw = [
      {
        block: 'authors',
        content: [
          {
            elem: 'header',
            content: 'Проект разработали',
          },
          {
            elem: 'items',
            authors: bemAuthors,
          },
        ],
      },
    ];

    const application = document.getElementById('application');
    application.insertAdjacentHTML('beforeend', bemhtml.apply(draw));
  } else {
    ajax.doGet({path: settings.url + '/authors'}).then((response) => {
      if (response.status > 499) {
        alert('Server error');
        return;
      }

      response.json().then((data) => {
        application.innerHTML = '';
        createAuthors(data['data']);
      });
    });
  }
}
