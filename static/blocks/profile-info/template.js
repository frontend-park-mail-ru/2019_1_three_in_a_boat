block('profile-info').elem('item')({   
    content: (node, ctx) => [
        {                    
            elem: 'item-name',
            content: ctx.name
        },
        {
            elem: 'item-value',
            content: ctx.value
        }
    ]
});