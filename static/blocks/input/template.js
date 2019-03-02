block('input').elem('field')({tag: 'input'});
block('input').elem('field').match((node, ctx) => !ctx.attrs || !ctx.attrs.type)
({addAttrs: {'type': 'text'}});

block('input').match((node, ctx) => !ctx.content)({
  content: [{
    elem: 'field'
  }]
});

block('input').match((node) => node._inFieldGroup)({
  addMix: {
    elem: 'field',
    block: 'field-group'
  }
});