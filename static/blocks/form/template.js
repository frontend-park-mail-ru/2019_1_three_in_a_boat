block('form')({tag: 'form'});

block('form')({
  extend: (node) => ({
    formId: node.generateId(),
  }),
});
