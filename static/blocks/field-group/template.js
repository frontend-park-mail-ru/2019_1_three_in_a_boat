block('field-group')({
  content: (node, ctx) => {

    let i = 0;
    ctx.content = applyNext();
    return ctx.content.map((elt) => {
      let fieldMix = {block: 'field-group', elem: 'field', mods: {}};

      if (i === 0) {
        fieldMix.mods.position = 'prepend';
      } else if (i === ctx.content.length - 1) {
        fieldMix.mods.position = 'append';
      } else {
        fieldMix.mods.position = 'middle';
      }

      elt.mix = fieldMix;
      i++;
      return elt;
    })
  }
});

block('field-group')({
  grouped: true
});