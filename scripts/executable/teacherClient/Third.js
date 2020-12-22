const { create } = require('domain');
const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');

mainElem = document.getElementById('main');


function createElement(value) {
  inputField = '<input type="text" class="PlaceChange form-control text-center " placeholder="Тема" aria-describedby="basic-addon1" value='+value+'>';
  mydiv = document.createElement('div');
  mydiv.innerHTML = inputField;
  mydiv.className = 'toOutData input-group mb-3 text-center';
  pos = document.getElementById('endDiv');
  mainElem.insertBefore(mydiv, pos);
}

function uploadElements () {
  testPath = getTestPath.getPath();
  themes = document.querySelectorAll('.toOutData');
  stringToWirte = '';
  console.log(themes.length);
  themes.forEach((element) => {
    stringToWirte += element.children[0].value + '\n';
    console.log(element);
  })
  try{
    fs.mkdirSync(path.join(testPath, '3'), (e)=>{});
  } catch (e ) {}
  fs.writeFileSync(path.join(testPath, '3/content.txt'), stringToWirte, (err)=>{});
}

if (fs.existsSync(path.join(getTestPath.getPath(), "3"))){
  let list = fs.readFileSync(path.join(getTestPath.getPath(), "3", "content.txt")).toString().split("\n");
  console.log(list);
  for (let i of list) {
    console.log(i);
    if (i.length == 0) continue;
    createElement(i);
  }
}


document.getElementById('createButton').onclick = () => {
  createElement("");
  uploadElements();
}

document.getElementById('submitButton').onclick = () => {
  uploadElements();
  window.location.href = path.join('../../templates/teacherClient/ListOftests1.html')
}

console.log(document.getElementById("prevButton"));

document.getElementById("prevButton").onclick = () => {
  uploadElements();
  window.location.href = path.join('../../templates/teacherClient/Second.html')
}