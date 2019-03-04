block('*').match((node, ctx) => ctx.wrappedInside)({
  addMix: (node, ctx) => ({
    block: ctx.wrappedInside,
    elem: ctx.wrappedAs || ctx.block,
    elemMods: ctx.elemMods
  }),
});