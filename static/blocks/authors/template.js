block('authors')(elem('items')({
  'content': (node, ctx) => {
    return ctx.content.map(elt => {
      return {
        'elem': 'item',
        'content': [
          {
            'elem': 'img',
            'tag': 'img',
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
      };
    })
  }
}));