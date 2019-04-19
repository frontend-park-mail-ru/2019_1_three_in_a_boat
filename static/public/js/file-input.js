'use strict';

const BLOCK = 'file-input';

/**
 * Show the selected image from users data before sending it to the server
 */
export function previewFile() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.onloadend = function() {
    preview.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}

/**
 * Set handler for file inputs changes
 */
export function initFileInputs() {
  const fileInputs = document.getElementsByClassName(BLOCK);
  for (const inputBlock of fileInputs) {
    const children = inputBlock.childNodes;
    let field;
    let info;
    for (const child of children) {
      if (child.classList.contains(`${BLOCK}__field`)) {
        field = child;
      } else if (child.classList.contains(`${BLOCK}__info`)) {
        info = child;
      }
    }
    field.onchange = (e) => {
      if (e.srcElement.id === 'updateForm_avatar') {
        previewFile();
      }
      const elt = e.target || e.srcElement;
      if (elt.files && elt.files.length > 0) {
        if (elt.files.length === 1) {
          let fileName = elt.files[0].name;
          fileName = fileName.length > 20 ?
              fileName.substr(0, 17) + '...' : fileName;
          info.textContent = fileName;
        } else {
          if (elt.getAttribute('multiple') !== null) {
            const filesInfoText = elt.files.length % 100 >= 5 &&
                elt.files.length <= 20 ?
                    'файлов' : (elt.files.length % 10 === 1 ? 'файл' :
                    (elt.files.length % 10 <= 4 ? 'файла' : 'файлов'));
            info.textContent =
                `${elt.files.length} ${filesInfoText}`;
          } // else do nothing (?)
        }
      }
    };
  }
}

/**
 * Get file in Base64 format
 * @param {File} file
 * @return {Promise<any>}
 */
export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    if (!file) {
      return resolve(undefined);
    }
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.replace(/^data:(.*;base64,)?/, '');
      if ((encoded.length % 4) > 0) {
        encoded += '='.repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
}
