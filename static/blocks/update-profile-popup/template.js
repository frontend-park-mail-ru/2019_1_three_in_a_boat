block('update-profile-popup').match((node, ctx) => ctx.addCloseButton)({
  prependContent: {
    block: 'icon',
    mix: {
      elem: 'close-popup',
      block: 'update-profile-popup',
      mods:  {type: 'cross', color: 'black', size: 'large'}
    }
  }
});

block('update-profile-popup').elem('hr')({'tag' : 'hr'});