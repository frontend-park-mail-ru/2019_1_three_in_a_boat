import createHeader from './header.js';
import AjaxModule from './ajax.js';

const ajax = new AjaxModule();

/**
 * Create Score Board page
 * @param {Array}users An Array of personal users data
 */
export default function createScoreBoard(users) {
  createHeader();

  // const template = [
  //   {
  //     block: 'scoreboard',
  //     content: [
  //       {
  //         elem: 'items',
  //         scores: [
  //           {
  //             name: 'Никита',
  //             img: 'images/nikita.jpg',
  //             username: 'Kotyarich',
  //             score: '9999',
  //             userId: 1,
  //           },
  //           {
  //             name: 'Арсен',
  //             img: 'images/pepe.jpg',
  //             username: 'Arsen',
  //             score: '9998',
  //             userId: 2,
  //           },
  //           {
  //             name: 'Андрей',
  //             img: 'images/andrey.jpg',
  //             username: 'Andrew',
  //             score: '9997',
  //             userId: 3,
  //           },
  //         ],
  //       },
  //     ],
  //   }];
  // document.getElementById('application').insertAdjacentHTML('beforeend',
  //     bemhtml.apply(template)
  // );
  if (users) {
    const data = JSON.parse(JSON.stringify(users));
    let bemUsers = [];
    for (const user in data) {
      bemUsers.push({
        name: user.name,
        img: user.img,
        username: user.username,
        score: user.score,
        userId: user.userId,
      });
    }
    const draw = [
      {
        block: 'scoreboard',
        content: [
          {
            elem: 'items',
            scores: [
              bemUsers,
            ],
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
        createScoreBoard(data);
      },
      path: '/rating',
    });
  }
}
