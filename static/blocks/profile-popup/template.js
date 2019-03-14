block('profile-popup').match((node, ctx) => !ctx.content && ctx.title &&
    (ctx.info || ctx.fields) && ctx.img && ctx.allowEdit !== undefined)({
  content: (node, ctx) => [
    {
      elem: 'title',
      content: [ctx.title],
    },
    {
      elem: 'content',
      content: [
        {
          elem: 'profile-icon',
          attrs: {src: ctx.img},
        },
        {
          block: 'profile-info',
          mix: {block: 'profile-popup', elem: 'profile-info'},
          userInfo: ctx.info,
          userFields: ctx.fields,
        },
        {
          elem: 'double-btn',
          content: ctx.allowEdit ? [{
            block: 'btn',
            mods: {'size': 'large', 'with-icon': true, 'cancel': true},
            wrappedInside: 'profile-popup',
            icon: 'useredit',
            btnText: 'Изменить',
          }] : [],
        },
      ],
    },
  ],
});
