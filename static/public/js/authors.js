import createHeader from './header.js';
import AjaxModule from './ajax.js';

const ajax = new AjaxModule();

/**
 * create Page with Authors
 */
export default function createAuthors(authors) {
  createHeader();

  const template = [
    {
      block: 'authors',
      content: [
        {
          elem: 'header',
          content: 'Проект разработали',
        },
        {
          elem: 'items',
          authors: [
            {
              name: 'Никита',
              devInfo: 'фронт/бэк/фуллкек',
              img: 'images/nikita.jpg',
              description: '01234',
            },
            {
              name: 'Арсен',
              devInfo: 'фронт/бэк/фуллкек',
              img: 'images/pepe.jpg',
              description: '56789',
            },
            {
              name: 'Андрей',
              devInfo: 'фронт/бэк/фуллкек',
              img: 'images/andrey.jpg',
              description: 'Цифры закончились, Андрей, ' +
                'раньше надо было приходить',
            },
          ],
        },
      ],
    }];

  if (authors) {
    const data = JSON.parse(JSON.stringify(authors));
    console.log(data);
    return;
    const bemAuthors = [];
    data['data'].forEach(function(author) {
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
        console.log(data['data']);
        application.innerHTML = '';
        createAuthors(data['data']);
      },
      path: 'http://127.0.0.1:3000/authors',
    });
  }
  // document.getElementById('application').insertAdjacentHTML(
  //     'beforeend',
  //     bemhtml.apply(template)
  // );
}
