const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');

document.getElementById('createButton').onclick = () => {
  inputField = '<input/>';
  mydiv = document.createElement('div');
  mydiv.innerHTML = inputField;
  mydiv.className = 'toOutData';
  pos = document.getElementById('endDiv');
  document.body.insertBefore(mydiv, pos);
}

document.getElementById('submitButton').onclick = () => {
  testPath = getTestPath.getPath();
  themes = document.querySelectorAll('.toOutData');
  stringToWirte = '';
  themes.forEach((element) => {
    stringToWirte += element.children[0].value + '\n';
    console.log(element);
  })
  fs.mkdir(path.join(testPath, '3'), (e)=>{});
  fs.writeFileSync(path.join(testPath, '3/content.txt'), stringToWirte, (err)=>{});
}