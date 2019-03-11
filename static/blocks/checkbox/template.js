block('checkbox')({
  tag: 'input',
  addAttrs: {
    type: 'checkbox',
  },
});

block('checkbox')({
  tag: 'input',
  addAttrs: (node, ctx) => ({
    'id': node.formId + '_' + ctx.fieldName,
    'name': ctx.fieldName,
  }),
});
