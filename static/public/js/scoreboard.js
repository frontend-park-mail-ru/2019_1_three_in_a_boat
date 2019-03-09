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

  if (users) {
    const data = JSON.parse(JSON.stringify(users));
    const bemUsers = [];

    Array.from(data.data.users).forEach((user) => {
      bemUsers.push({
        name: user.firstName,
        img: user.img,
        username: user.username,
        score: user.highScore,
        userId: user.uid,
      });
    });

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
