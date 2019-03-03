block('file-input').elem('field')({
  tag: 'input',
  addAttrs: (node) => ({
    type: 'file',
    'data-file-input-id': node.fileInputId
  })
});

block('file-input').elem('label')({
  tag: 'label',
  addAttrs: (node) => ({
    'data-file-input-id': node.fileInputId
  })
});

block('file-input').elem('info')({
  tag: 'span',
  addAttrs: (node) => ({
    'data-file-input-id': node.fileInputId
  })
});

block('file-input')({
  extend: (node) => ({
    fileInputId: node.generateId()
  })
});
