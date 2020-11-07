const fs = require('fs');
const path = require('path');
const getCurrentTestPath = require('../../entities/getCurrentTestPath.js')

let inp = document.getElementById('multilineTextField');
var pathToTest;

document.getElementById('submitButton').onclick = () => {
  pathToTest = getCurrentTestPath.getPath();
  console.log(pathToTest);
  fs.mkdir(path.join(pathToTest, '1'), (err) => {})
  fs.writeFile(path.join(pathToTest, '1', 'content.txt'), inp.value, (err)=>{});
}