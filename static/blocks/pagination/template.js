block('pagination').elem('link')({tag: 'button'});
block('pagination').elem('link').match((node, ctx) => ctx.content)({
  addMix: (node, ctx) => {
    let mods = {};
    if (ctx.content === 'Вперед') {
      mods = {last: true};
    }
    if (ctx.content === 'Назад') {
      mods = {first: true};
    }

    return {block: 'pagination', elem: 'link', elemMods: mods};
  },
});
