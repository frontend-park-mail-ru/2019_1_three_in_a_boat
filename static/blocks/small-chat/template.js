block('small-chat').elem('btn')({
  appendContent: (node, ctx) => ({
    elem: 'item',
    content: [
      {
        tag: 'span',
        block: 'icon-bg',
        mods: {
          borderless: true,
          size: 'full',
        },
        content: {
          block: 'icon',
          mods: {color: 'white', type: ctx.type, size: 'fit'},
        },
        wrappedInside: 'small-chat',
        wrappedAs: 'icon-bg',
      },
    ],
  }),
});
