block('chat').elem('items').match(
    (node, ctx) => ctx.messages !== undefined)({
  appendContent: (node, ctx) => ctx.messages.map((elt, index) => ({
    elem: 'item',
    content: [
      {
        elem: 'msg-data',
        content: [
          {
            elem: 'link',
            tag: 'a',
            fieldName: 'userName',
            value: elt.userId,
            attrs: {value: elt.userId}, // to be changed once api's here
            content: [
              {
                elem: 'data-field',
                content: [
                  {
                    elem: 'username',
                    content: elt.username + ':',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        elem: 'text',
        content: elt.text,
      },
    ],
  })),
});
