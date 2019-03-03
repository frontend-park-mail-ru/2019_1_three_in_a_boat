block('form-group')({
  extend: (node) => ({
    _fieldParents: (node._fieldParents || []).concat(['form-group'])
  })
});