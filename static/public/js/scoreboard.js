import createHeader from './header.js';
import createPagination from './pagination.js';
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
    const bemUsers = [];
    console.log(data);
    Array.from(data.data.users).forEach((user) => {
      bemUsers.push({
        name: user.firstName,
        img: user.img,
        username: user.username,
        score: user.highScore,
        userId: user.uid,
      });
    });
    console.log(bemUsers);
    const draw = [
      {
        block: 'scoreboard',
        content: [
          {
            elem: 'items',
            scores: bemUsers,
          },
        ],
      }];
    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(draw));
    createPagination(data.data.page + 1, data.data.nPages + 1);
  } else {
    ajax.doGet({
      callback(xhr) {
        const data = JSON.parse(xhr.responseText);
        application.innerHTML = '';
        createScoreBoard(data);
      },
      path: 'http://127.0.0.1:3000/users?sort=-HighScore',
    });
  }
}
