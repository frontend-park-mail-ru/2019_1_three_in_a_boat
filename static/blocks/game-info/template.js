block('game-info').elem('item')({
  content: (node, ctx) => [
    {
      elem: 'item-name',
      content: ctx.name,
    },
    {
      elem: 'item-value',
      content: ctx.value,
    },
  ],
});

block('game-info').elem('profile-icon')({
  tag: 'img',
});

block('game-info').elem('line')({tag: 'hr'});

block('game-info').match((node, ctx) => !ctx.content && ctx.userInfo)({
  content: (node, ctx) => ctx.userInfo.map(
      (elt) => ({
        elem: 'item',
        name: elt[0],
        value: elt[1] || '-',
      })
  ),
});
