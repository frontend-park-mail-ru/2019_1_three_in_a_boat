block('file-input').elem('field')({
  tag: 'input',
  addAttrs: (node) => ({
    id: node.formId + '_' + node.fieldName,
    name: node.fieldName,
    type: 'file'
  }),
});

block('file-input').elem('label')({
  tag: 'label',
  addAttrs: (node) => ({'for': node.formId + '_' + node.fieldName})
});

block('file-input').elem('info')({
  tag: 'span',
});

block('file-input').match((node, ctx) => !ctx.content)({
  content: (node, ctx) => [
    {
      elem: 'label',
      content: [ctx.labelText || 'Выберите файл'],
    },
    {
      elem: 'info',
      content: [ctx.emptyText || '(файл не выбран)']
    },
    {
      elem: 'field'
    }
  ]
});

block('file-input')({
  extend: (node, ctx) => ({fieldName: ctx.fieldName || node.generateId()})
});