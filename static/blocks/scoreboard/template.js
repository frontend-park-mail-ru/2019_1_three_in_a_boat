block('scoreboard').elem('username')({ tag: 'span'});
block('scoreboard').elem('avatar')({ tag: 'img'});

block('scoreboard').elem('items').match((node, ctx) => ctx.scores !== undefined)({
    appendContent: (node, ctx) => ctx.scores.map((elt, index) => {        
        let item = {                    
            elem: 'item',
            content: [
                {
                    elem: 'user-data',
                    content: [
                        {
                            elem: 'place',
                            content: '#' + (index + 1)
                        },
                        {
                            elem: 'link',
                            tag: 'a',
                            content: [
                                {
                                    elem: 'avatar',
                                    attrs: {
                                        src: elt.img,
                                        alt: elt.name
                                    }
                                },                        
                                {
                                    elem: 'username',
                                    content: elt.username
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'score',
                    content: elt.score
                }
            ]        
        }

        switch (index) {
            case 0:
                item.elemMods = { place: 'first'};
                break;
            case 1:
                item.elemMods = { place: 'second'};
                break;
            case 2:
                item.elemMods = { place: 'third'};
                break;
        }

        return item;
    })
  });