block('profile-info').elem('item')({
  content: (node, ctx) => [
    {
      elem: 'item-name',
      content: ctx.name,
    },
    {
      elem: 'item-value',
      content: ctx.value,
    },
  ],
});

block('profile-popup').elem('profile-icon')({
  tag: 'img',
});


block('profile-info').match((node, ctx) => !ctx.content && ctx.userInfo)({
  content: (node, ctx) => ctx.userInfo.map(
      (elt) => ({
        elem: 'item',
        name: elt[0],
        value: elt[1] || '-',
      })
  ),
});


block('profile-info').match((node, ctx) => !ctx.content && ctx.fields)({
  content: (node, ctx) => ctx.fields.map(
      (elt) => ({
        elem: 'item',
        name: elt.name,
        value: {
          block: 'form-group',
          content: elt.content ? elt.content : [
            elt.value || {
              block: 'input',
              fieldName: elt.fieldName,
              fieldAttrs: elt.fieldAttrs,
            },
            elt.novalidate ? {} :{
              elem: 'help-text',
              elemMods: {hidden: true},
              for: elt.fieldName || elt.value.fieldName,
            },
          ],
        },
      })
  ),
});
