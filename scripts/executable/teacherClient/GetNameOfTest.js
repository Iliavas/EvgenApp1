const fs = require('fs');
const path = require('path');

inp = document.getElementById('inputField');

document.getElementById('nextButton').onclick = () => {
  pathToTestFolder = path.join(process.cwd(), 'Tests');
  if (!fs.existsSync(pathToTestFolder)) {
    fs.mkdir(pathToTestFolder, {recursive: true}, (err)=>{console.log(err)});
  }
  fs.mkdir(path.join(pathToTestFolder, inp.value), (err)=>{});
  fs.writeFile(path.join(process.cwd(), 'buffer.txt'), path.join(pathToTestFolder, inp.value), (err)=>{});
}