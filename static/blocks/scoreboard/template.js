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
            content: '#' + (index + 1)
          },
          {
            elem: 'link',
            tag: 'a',
            attrs: {'href': '/profile?u=' + elt.userId}, // to be changed once api's here
            content: [
              {
                elem: 'avatar',
                attrs: {
                  src: elt.img,
                  alt: elt.name
                }
              },
              {
                elem: 'username',
                content: elt.username
              }
            ]
          }
        ]
      },
      {
        elem: 'score',
        content: elt.score
      }
    ],
    elemMods: index < 3 ? {place: ['first', 'second', 'third'][index]} : {}
  }))
});