block('sm-icons-list').elem('icon-bg')({'tag': 'a'});
block('sm-icons-list').elem('icon')({'tag': 'i'});

block('sm-icons-list').elem('icon-bg').match((node, ctx) => ctx.href)({
    addAttrs: (node, ctx) => ({href: ctx.href}),
});
