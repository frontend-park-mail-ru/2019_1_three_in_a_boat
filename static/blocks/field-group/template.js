block('field-group')({
  extend: (node) => ({
    _fieldParents: (node._fieldParents || []).concat(['field-group'])
  })
});

block('field-group').match(
    (node) => Array.isArray(node._fieldParents) &&
        ((node._fieldParents.length > 0
          && node._fieldParents[node._fieldParents.length - 1] !== 'field-group')
          || node._fieldParents.length > 1))
({
  addMix: (node) => ({
    block: (node._fieldParents[node._fieldParents.length - 1] === 'field-group' ?
            node._fieldParents[node._fieldParents.length - 2] :
            node._fieldParents[node._fieldParents.length - 1]),
    elem:  'field'
  })
});