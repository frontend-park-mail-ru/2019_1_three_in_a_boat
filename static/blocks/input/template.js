block('input').elem('field')({
  tag: 'input',
  addAttrs: (node) => ({
    'id': node.formId + '_' + node.fieldName,
    'name': node.fieldName,
  }),
});

block('input').elem('field').match((node, ctx) => !ctx.attrs || !ctx.attrs.type)
({addAttrs: {'type': 'text'}});

block('input').match((node, ctx) => !ctx.content)({
  content: (node, ctx) => [{
    elem: 'field',
    attrs: ctx.fieldAttrs,
  }],
});

block('input')({
  extend: (node, ctx) => ({fieldName: ctx.fieldName || node.generateId()}),
});

block('input').elem('tooltip')({
  addAttrs: (node, ctx) => ({
    'data-for': node.formId + (ctx['data-for'] || node.fieldName),
  }),
});

// (form/field)-group related stuff
block('input').match(
    (node) => Array.isArray(node._fieldParents) && node._fieldParents.length)({
  addMix: (node) => ({
    block: node._fieldParents[node._fieldParents.length - 1],
    elem: 'field',
  }),
});
