'use strict';

/** Saves blocks in a bundle that can be used for rendering in browser
 * @param {string} 1 - path where the bundle will be saved
 * @param {string} 2 - path to directory 'blocks' with the following structure:
 * blocks
 * ├── block1
 * │   ├── <some other files>
 * │   └── template.js
 * ├── block2
 * │   ├── <some other files>
 * │   └── template.js
 * ├── <other blocks>
 * note: template.js files must be encoded UTF-8 and should not conflict
 * with each other (i.e. only affect their own block)
 */

if (process.argv.length !== 4) {
  console.log("Usage: node bundle-all path/to/bundle.bemhtml.js path/to/blocks-dir");
  process.exit(1);
}

const fs = require('fs');
const path = require('path');

const bundlePath = path.resolve(__dirname, process.argv[2]);
const blocksPath = path.resolve(__dirname, process.argv[3]);

if (!fs.existsSync(blocksPath)) {
  console.log(`blocks path does not exist: ${blocksPath}`);
  process.exit(1);
}

if (!fs.existsSync(path.dirname(bundlePath))) {
  console.log(`cannot write bundle: parent directory does not exist: ${bundlePath}`);
  process.exit(1);
}

// actual generating
const bemxjst = require('bem-xjst');

let templates = "";
const BEM_OPTIONS = {
  'exportName': 'bemhtml',

};

fs.readdir(blocksPath, (err, files) => {
  files.forEach(file => {
    const blockDir = path.resolve(blocksPath, file);
    if (fs.statSync(blockDir).isDirectory()) {
      const templateFile = path.resolve(blockDir, 'template.js');
      if (fs.existsSync(templateFile)) {
        console.log(`adding ${path.basename(blockDir)}`);
        templates += fs.readFileSync(templateFile, {'encoding': 'utf8'});
      } else {
        console.log(`skipping ${path.basename(blockDir)}: template.js not found`)
      }
    }
  });

  let bundle = eval(`bemxjst.bemhtml.generate(() => {
    ${templates}
  }, ${JSON.stringify(BEM_OPTIONS)});`);

  fs.writeFileSync(bundlePath, bundle, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log(`bundle written to ${bundlePath}`)
    }
  });
});


