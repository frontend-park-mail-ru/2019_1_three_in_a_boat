block('result-redirect').elem('btn')({tag: 'button'});

block('result-redirect').elem('link')({tag: 'a  '});

block('result-redirect').elem('btn').match(
    (node, ctx) => !ctx.content && ctx.btnText)({
  content: (node, ctx) => [{
    elem: 'inner',
    content: [
      {
        elem: 'text',
        content: ctx.btnText,
      },
    ],
  }],
});
