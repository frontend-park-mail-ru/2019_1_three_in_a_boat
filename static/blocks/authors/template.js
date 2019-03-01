block('authors').elem('img')({
  'tag': 'img'
});
block('authors').elem('items').match((node, ctx) => ctx.authors !== undefined)({
  'content': (node, ctx) => (
      // if there's 'authors' then append item per author to the end
    (ctx.content || []).concat(ctx.authors.map(elt => (
      {
        'elem': 'item',
        'content': [
          {
            'elem': 'img',
            'attrs': {
              'src': elt.img,
              'alt': elt.name
            }
          },
          {
            'elem': 'title',
            'content': elt.name
          },
          {
            'elem': 'subtitle',
            'content': elt.devInfo
          },
          {
            'elem': 'description',
            'content': elt.description
          }
        ]
      }
    )))
  )
});