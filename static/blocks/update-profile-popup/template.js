block('update-profile-popup').match((node, ctx) => ctx.addCloseButton)({
  prependContent: {
    block: 'icon',
    mods:  {type: 'cross', color: 'black', size: 'large', btn: true},
    mix: {
      elem: 'close-popup',
      block: 'update-profile-popup',
    }
  }
});

block('update-profile-popup').elem('hr')({'tag' : 'hr'});
