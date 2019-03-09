/**
 * Create page header
 */
export default function createHeader() {
  const header = {
    block: 'header',
    mods: {'main': true},
    content: [
      {
        block: 'icon',
        mods: {color: 'orange', size: 'xlarge', type: 'mailru'},
      },
      {
        elem: 'title',
        tag: 'a',
        attrs: {type: 'menu'},
        content: ['hexagon'],
      },
    ],
  };

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(header)
  );
}
