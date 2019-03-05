import createHeader from './header.js';
import AjaxModule from './ajax.js';

const ajax = new AjaxModule();

export default function createAuthors() {
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
              description: 'Цифры закончились, Андрей, раньше надо было приходить',
            },
          ],
        },
      ],
    }];

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );
}
