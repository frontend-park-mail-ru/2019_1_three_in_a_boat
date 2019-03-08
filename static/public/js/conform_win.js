import createProfile from './profile.js';
import AjaxModule from './ajax.js';
import createMenu from './menu.js';

const ajax = new AjaxModule();

/**
 *
 */
export default function createConformWindow() {
  const conform = [
    {
      block: 'login-popup',
      content: [
        {
          block: 'title',
          wrappedInside: 'profile-popup',
          content: ['Вы уверены?'],
        },
        {
          elem: 'double-btn',
          content: [

            {
              block: 'btn',
              mods: {'size': 'large', 'cancel': true},
              wrappedInside: 'profile-popup',
              content: [
                {
                  elem: 'text',
                  content: 'Да',
                },
              ],
            },
            {
              block: 'btn',
              mods: {'size': 'large', 'color': 'muted'},
              wrappedInside: 'profile-popup',
              content: [
                {
                  elem: 'text',
                  content: 'Нет',
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  event.preventDefault();
  application.innerHTML = '';
  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(conform)
  );

  const cnslBtn = document.getElementsByClassName('btn_color_muted')[0];
  cnslBtn.addEventListener('click', function(event) {
    event.preventDefault();
    application.innerHTML = '';
    createProfile();
    return;
  });

  const confBtn = document.getElementsByClassName('btn_cancel')[0];
  confBtn.addEventListener('click', function(event) {
    event.preventDefault();
    ajax.doDelete({
      callback() {
        application.innerHTML = '';
        createMenu();
      },
      path: 'http://127.0.0.1:3000/delete',
      body: {
        userid: ctx.id,
      },
    });
  });
}
