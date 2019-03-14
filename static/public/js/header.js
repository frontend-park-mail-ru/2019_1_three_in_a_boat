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
        mods: {color: 'white', size: 'xlarge', type: 'hexagon'},
      },
      {
        elem: 'title',
        tag: 'a',
        attrs: {'data-link-type': 'menu'},
        content: ['hexagon'],
      },
    ],
  };

  const application = document.getElementById('application');
  application.insertAdjacentHTML('beforeend', bemhtml.apply(header));
}
