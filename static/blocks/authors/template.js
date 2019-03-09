block('authors').elem('img')({
  'tag': 'img',
});

block('authors').elem('items').match((node, ctx) => ctx.authors !== undefined)({
  appendContent: (node, ctx) => ctx.authors.map((elt) => ({
    elem: 'item',
    content: [
      {
        elem: 'img',
        attrs: {
          src: '/img' + elt.img,
          alt: elt.name,
        },
      },
      {
        elem: 'title',
        content: elt.name,
      },
      {
        elem: 'subtitle',
        content: elt.devInfo,
      },
      {
        elem: 'description',
        content: elt.description,
      },
    ],
  })),
});
