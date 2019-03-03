'use strict';

const application = document.getElementById('application');

function createMenuLink() {
    const menuLink = {
        block: 'link',
        tag: 'a',
        attrs: { type: 'menu' },
        content: 'Назад в главное меню'
    }

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(menuLink)
    );
}

function createHeader() {
    const header = {
        block: 'header',
        mods: {'main': true},
        content: [
            {
                block: 'icon',
                mods: {color: 'orange', size: 'xlarge', type: 'mailru'}
            },
            {
                elem: 'title',
                content: ['hexagon']
              }
        ]
    };

    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(header)
    );
}

function createMenu() {
    createHeader();

    const template = [
    {
        block: 'menu',
        content: [        
            {
                block: 'title',
                mods: { large: true },
                content: 'Меню',
                wrappedInside: 'menu',
                wrappedAs: 'title'
            },
            {
                block: 'hr',
                mods: { inline: true }
            },
            {
                elem: 'items',
                points: [
                    {
                        href: 'signIn',
                        text: 'Авторизация',
                        type: 'signin'
                    },
                    {
                        href: 'signUp',
                        text: 'Регистрация',
                        type: 'key'
                    },
                    {
                        href: 'authors',
                        text: 'Авторы',
                        type: 'users'
                    },
                    {
                        href: 'leaders',
                        text: 'Лидеры',
                        type: 'crown'
                    },
                    {
                        href: 'play',
                        text: 'Играть',
                        type: 'gamepad'
                    }
                ]
            }
        ]
    }];
    
    document.getElementById('application').insertAdjacentHTML('beforeend',
        bemhtml.apply(template)
    );
}

function createScoreBoard() {
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
                      img: '../static/public/images/nikita.jpg',
                      username: 'Kotyarich',
                      score: '9999',
                      userId: 1
                    },
                    {
                      name: 'Арсен',
                      img: '../static/public/images/pepe.jpg',
                      username: 'Arsen',
                      score: '9998',
                      userId: 2
                    },
                    {
                      name: 'Андрей',
                      img: '../static/public/images/andrey.jpg',
                      username: 'Andrew',
                      score: '9997',
                      userId: 3
                    }
                ]
                }
            ]
        }];
      
      document.getElementById('application').insertAdjacentHTML('beforeend',
          bemhtml.apply(template)
      );

      createMenuLink();
}

function createAuthors() {
    createHeader();

    const template = [
        {
          block: 'authors',
          content: [
            {
              elem: 'header',
              content: 'Проект разработали'
            },
            {
              elem: 'items',              
              authors: [
                {
                  name: 'Никита',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/nikita.jpg',
                  description: '01234'
                },
                {
                  name: 'Арсен',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/pepe.jpg',
                  description: '56789'
                },
                {
                  name: 'Андрей',
                  devInfo: 'фронт/бэк/фуллкек',
                  img: '../static/public/images/andrey.jpg',
                  description: 'Цифры закончились, Андрей, раньше надо было приходить'
                }
              ]
            }
          ]
        }];
      
      document.getElementById('application').insertAdjacentHTML('beforeend',
          bemhtml.apply(template)
      );

      createMenuLink();
}

createMenu();

const pages = {
    menu: createMenu,
    authors: createAuthors,
	leaders: createScoreBoard,
};

application.addEventListener('click', function (event) {
	if (!(event.target instanceof HTMLAnchorElement)) {
		return;
	}

	event.preventDefault();
	const link = event.target;

	console.log({
        href: link.type,	        	
    });

	application.innerHTML = '';

	pages[ link.type ]();
});