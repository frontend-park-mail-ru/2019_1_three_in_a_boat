block('btn')({'tag': 'button'});
block('btn').elem('text')({'tag': 'span'});
block('btn').elem('inner')({'tag': 'span'});

// if inner isn't explicitly wrapping the content - do that implicitly
block('btn').match((node, ctx) => (ctx.content && ctx.content.find(
    (elt) => elt['elem'] === 'inner') === undefined))({
  content: () => [{
    elem: 'inner',
    content: applyNext(),
  }],
});

block('btn').match((node, ctx) => !ctx.content && ctx.icon && ctx.btnText)({
  addMods: {'with-icon': true},
  content: (node, ctx) => [{
    elem: 'inner',
    content: [
      {
        block: 'icon',
        wrappedInside: 'btn',
        mods: {type: ctx.icon, size: ctx.mods.size},
      },
      {
        elem: 'text',
        content: ctx.btnText,
      },
    ],
  }],
});

