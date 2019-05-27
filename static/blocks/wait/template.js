block('wait').elem('loader')({
  content: (node, ctx) => {
    const pointArr = [];
    let num = 0;
    if (ctx.value) {
      num = ctx.value;
    }
    for (let i = 0; i < num; ++i) {
      pointArr.push({elem: 'point'});
    }
    return pointArr;
  },
});

block('wait').elem('point')({'tag': 'i'});
