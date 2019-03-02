// shortcut for a mix: useful for reusable blocks that are *usually*
// something else's elements: e.g. form elements, icons, buttons etc.
block('*').match((node, ctx) => ctx.wrappedInside)({
  'addMix': (node, ctx) => ({
    block: ctx.wrappedInside,
    elem: ctx.wrappedAs || ctx.block,
    elemMods: ctx.elemMods
  }),
});

