const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');

mainElem = document.getElementById('main');

document.getElementById('createButton').onclick = () => {
  inputField = '<input type="text" class="PlaceChange form-control text-center " placeholder="Тема" aria-describedby="basic-addon1">';
  mydiv = document.createElement('div');
  mydiv.innerHTML = inputField;
  mydiv.className = 'toOutData input-group mb-3 text-center';
  pos = document.getElementById('endDiv');
  mainElem.insertBefore(mydiv, pos);
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
  window.location.href = path.join(process.cwd(), 'templates/teacherClient/ListOftests1.html')
}