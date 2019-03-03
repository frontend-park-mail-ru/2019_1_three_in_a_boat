block('sm-icons-list').elem('icon-bg')({'tag': 'a'});
block('sm-icons-list').elem('icon')({'tag': 'i'});

block('sm-icons-list').elem('icon-bg').match((node, ctx) => ctx.target)({
    addAttrs: (node, ctx) => ({href: ctx.url}),
});
