const fs = require('fs');
const path = require('path');

inp = document.getElementById('inputField');

document.getElementById('nextButton').onclick = () => {
  pathToTestFolder = path.join(process.cwd(), "Tests");
  if (!fs.existsSync(pathToTestFolder)) {
    fs.mkdir(pathToTestFolder, {recursive: true}, (err)=>{console.log(err)});
  }
  fs.mkdir(path.join(pathToTestFolder, inp.value), (err)=>{});
  console.log(inp.value);
  fs.writeFileSync('buffer.txt', path.join(pathToTestFolder, inp.value), (err)=>{
    console.log(err);
  });
  console.log();
  window.location.href=path.join('../../templates/teacherClient/First.html')
}