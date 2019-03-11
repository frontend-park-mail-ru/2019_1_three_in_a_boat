block('menu').elem('link')({tag: 'a'});
block('menu').elem('avatar')({tag: 'img'});
block('menu').elem('items')({elemMods: {color: 'white-whitesmoke-chain'}});
block('menu').elem('title')({
  block: 'title',
  mods: {large: true},
});

block('menu').elem('items').match((node, ctx) => ctx.points !== undefined)({
  appendContent: (node, ctx) => ctx.points.map((elt) => ({
    elem: 'item',
    content: [
      {
        elem: 'link',
        attrs: {href: elt.href, type: elt.href},
        content: [
          {
            tag: 'span',
            block: 'icon-bg',
            mods: {
              borderless: true,
              size: 'xlarge',
              shape: 'round',
              color: 'green',
            },
            content: {
              block: 'icon',
              mods: {color: 'white', type: elt.type},
            },
            wrappedInside: 'menu',
            wrappedAs: 'icon-bg',
          },
          elt.text,
        ],
      },
    ],
  })),
});
