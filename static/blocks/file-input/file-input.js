'use strict';

const BLOCK = 'file-input';

let fileInputs = document.getElementsByClassName(BLOCK);
for (let inputBlock of fileInputs) {
  let children = inputBlock.childNodes;
  let field, info;
  for (let child of children) {
    if (child.classList.contains(`${BLOCK}__field`)) {
      field = child;
    } else if (child.classList.contains(`${BLOCK}__info`)) {
      info = child;
    }
  }
  field.onchange = (e) => {
    const elt = e.target || e.srcElement;
    if (elt.files && elt.files.length > 0) {
      if (elt.files.length === 1) {
        let fileName = elt.files[0].name;
        fileName = fileName.length > 20 ?
            fileName.substr(0, 17) + '...' : fileName;
        info.textContent = fileName;
      } else {
        if (elt.getAttribute('multiple') !== null) {
          console.log(elt.files);
          const filesInfoText = elt.files.length % 100 >= 5 && elt.files.length <= 20 ?
              'файлов' : (elt.files.length % 10 === 1 ? 'файл' :
                  (elt.files.length % 10 <= 4 ? 'файла' : 'файлов'));
          info.textContent =
              `${elt.files.length} ${filesInfoText}`
        } // else do nothing (?)
      }
    }
  };
}