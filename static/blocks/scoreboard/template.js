block('scoreboard').elem('username')({tag: 'span'});
block('scoreboard').elem('avatar')({tag: 'img'});

block('scoreboard').elem('items').match((node, ctx) => ctx.scores !== undefined)({
  appendContent: (node, ctx) => ctx.scores.map((elt, index) => ({
    elem: 'item',
    content: [
      {
        elem: 'user-data',
        content: [
          {
            elem: 'place',
            content: '#' + (index + 1),
          },
          {
            elem: 'link',
            tag: 'a',
            fieldName: 'userName',
            value: elt.userId,
            attrs: {value: elt.userId}, // to be changed once api's here
            content: [
              {
                elem: 'data-field',
                content: [
                  {
                    elem: 'avatar',
                    attrs: {
                      src: '/img' + elt.img,
                      alt: elt.name,
                    },
                  },
                  {
                    elem: 'username',
                    content: elt.username,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        elem: 'score',
        content: elt.score,
      },
    ],
    elemMods: index < 3 ? {place: ['first', 'second', 'third'][index]} : {},
  })),
});
