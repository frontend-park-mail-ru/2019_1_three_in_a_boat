block('pagination').elem('link')({tag: 'button'});
block('pagination').elem('link').match((node, ctx) => ctx.content)({
  addMix: (node, ctx) => {
    let mods = {};
    if (ctx.content[0] === 'Вперед') {
      mods = {last: true};
    }
    if (ctx.content[0] === 'Назад') {
      mods = {first: true};
    }

    return {block: 'pagination', elem: 'link', elemMods: mods};
  },
});
