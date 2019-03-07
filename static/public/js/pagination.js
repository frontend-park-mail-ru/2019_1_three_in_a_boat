function getNumeration(currPage, pagesNumber) {
  const numbers = ['Назад', 1];
  if (pagesNumber >= 2) {
    numbers.push(2);
  }
  if (currPage > 5) {
    numbers.push('...');
  }

  for (let i = currPage - 2; i <= currPage + 2 && i <= pagesNumber - 2; i++) {
    if (i > 2) {
      numbers.push(i);
    }
  }

  if (currPage + 2 < pagesNumber - 2) {
    numbers.push('...', pagesNumber - 1, pagesNumber, 'Вперед');
  }

  return numbers;
}

export default function createPagination(currPage, pagesNumber) {
  const template = [
    {
      block: 'pagination',
      content: [],
    },
  ];

  const numbers = getNumeration(currPage, pagesNumber);
  numbers.forEach((number) => {
    const btn = {
      elem: 'link',
      content: [number],
    };

    if (number === currPage) {
      btn.elemMods = {current: true};
    }

    template[0].content.push(btn);
  });

  document.getElementById('application').insertAdjacentHTML('beforeend',
      bemhtml.apply(template)
  );
}
