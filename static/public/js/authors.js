import createHeader from './header.js';
import AjaxModule from './ajax.js';

const ajax = new AjaxModule();

/**
 * create Page with Authors
 */
export default function createAuthors(authors) {
  createHeader();

  if (authors) {
    const data = JSON.parse(JSON.stringify(authors));
    const bemAuthors = [];

    Array.from(data).forEach((author) => {
      bemAuthors.push({
        name: author.name,
        devInfo: author.devInfo,
        img: author.img,
        description: author.description,
      });
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
      }];

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(draw));
  } else {
    ajax.doGet({
      callback(xhr) {
        const data = JSON.parse(xhr.responseText);

        application.innerHTML = '';
        createAuthors(data['data']);
      },
      path: 'http://127.0.0.1:3000/authors',
    });
  }
}
