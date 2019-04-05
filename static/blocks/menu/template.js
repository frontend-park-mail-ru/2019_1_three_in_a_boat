block('menu').elem('link')({tag: 'a'});
block('menu').elem('avatar')({tag: 'img'});
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
        attrs: {'href': '#', 'data-link-type': elt.href},
        content: [
          {
            tag: 'span',
            block: 'icon-bg',
            mods: {
              borderless: true,
              size: 'full',
              color: 'dark-gray',
            },
            content: {
              block: 'icon',
              mods: {color: 'white', type: elt.type, size: 'fit'},
            },
            wrappedInside: 'menu',
            wrappedAs: 'icon-bg',
          },
          {
            elem: 'text',
            content: elt.text,
          },
        ],
      },
    ],
  })),
});
