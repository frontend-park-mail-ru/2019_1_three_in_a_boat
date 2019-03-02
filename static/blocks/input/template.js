block('input')({
  def: (node, ctx) => {
    if (!ctx.content) return ctx;

    const appendixIndex = ctx.content.findIndex(
        (elt) => elt.block === 'icon' || elt.elem === 'appendix');
    const inputIndex = ctx.content.findIndex((elt) => elt.elem === 'field');
    if (appendixIndex === -1) return ctx;

    if (inputIndex === 0)
      node.extend(ctx.content[inputIndex].mods, {'appended': 'before'});
    else if (inputIndex === ctx.content.length - 1)
      node.extend(ctx.content[inputIndex].mods, {'appended': 'after'});
    else
      node.extend(ctx.content[inputIndex].mods, {'appended': 'both'});

    console.log(ctx);
    return ctx;
  }
});

block('input').elem('field')({extend: {tag: 'input'}});

block('input').match((node, ctx) => !ctx.content)({
  content: [{
    elem: 'field'
  }]
});