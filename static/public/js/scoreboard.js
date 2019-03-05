import createHeader from './header.js';

/**
 *
 */
export default function createScoreBoard() {
  createHeader();

  const template = [
    {
      block: 'scoreboard',
      content: [
        {
          elem: 'items',
          scores: [
            {
              name: 'Никита',
              img: 'images/nikita.jpg',
              username: 'Kotyarich',
              score: '9999',
              userId: 1,
            },
            {
              name: 'Арсен',
              img: 'images/pepe.jpg',
              username: 'Arsen',
              score: '9998',
              userId: 2,
            },
            {
              name: 'Андрей',
              img: 'images/andrey.jpg',
              username: 'Andrew',
              score: '9997',
              userId: 3,
            },
          ],
        },
      ],
    }];

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );
}
