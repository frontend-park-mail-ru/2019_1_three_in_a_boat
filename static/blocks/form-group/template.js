block('form-group')({
  extend: (node) => ({
    _fieldParents: (node._fieldParents || []).concat(['form-group'])
  })
});

block('form-group').elem('help-text')({
  addAttrs: (node, ctx) => ({
    'data-for': node.formId + ctx['data-for']
  })
});