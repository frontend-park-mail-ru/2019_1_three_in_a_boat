block('form')({tag: 'form'});

block('form')({
  extend: (node, ctx) => ({
    formId: ctx.name, // node.generateId(),
  }),
});
