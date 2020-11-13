const fs = require('fs');
const path = require('path');
const getCurrentTestPath = require('../../entities/getCurrentTestPath.js')

var pathToTest;

document.getElementById('submitButton').onclick = () => {
  inp = document.getElementById('exampleFormControlInput1');
  console.log(inp);
  pathToTest = getCurrentTestPath.getPath();
  console.log(pathToTest);
  fs.mkdir(path.join(pathToTest, '1'), (err) => {})
  fs.writeFile(path.join(pathToTest, '1', 'content.txt'), inp.value, (err)=>{});
  window.location.href = path.join(process.cwd(), 'templates/teacherClient/Second.html');
}