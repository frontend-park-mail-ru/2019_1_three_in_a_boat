block('select').elem('field')({
  tag: 'select'
});

block('select').match(
    (node, ctx) => !ctx.content && ctx.options)({
  content: (node, ctx) => [{
    elem: 'field',
    attrs: ctx.fieldAttrs,
    content: ctx.options.map((option, idx) => [{
      tag: 'option',
      content: option,
      attrs: idx === ctx.selectedOption ? {selected: true} : undefined
    }])
  }]
});

// (form/field)-group related stuff
block('select').match(
    (node) => Array.isArray(node._fieldParents) && node._fieldParents.length)({
  addMix: (node) => ({
    block: node._fieldParents[node._fieldParents.length - 1],
    elem: 'field'
  })
});