const fs = require('fs');
const path = require('path');
const {dialog} = require('electron').remote;


function findFile(folderLoc, totalFunc) {
  files = fs.readdirSync(folderLoc);
  res = [];
  for (i = 0; i < files.length; ++i) {
    loc = files[i].split('.');
    if (loc[loc.length-1] == 'json') res.push(path.join(folderLoc, files[i]));
  }
  totalFunc(res);
}

if (!fs.existsSync(path.resolve("Users"))) fs.mkdirSync(path.resolve('Users'));
if (!fs.existsSync(path.resolve('Tests'))) fs.mkdirSync(path.resolve('Tests'));

tests = fs.readdirSync(path.resolve('Tests'), (e)=>{});
holder = document.getElementById('testsHolder')

document.getElementById('createButton').onclick = () => {
  window.location.href = path.resolve('templates/teacherClient/GetNameOfTest.html');
}

tests.forEach((e)=>{
  element = document.createElement('div');
  element.innerHTML ='<button type="button" class="btn btn-lg my-btn bg-my text mx-auto">' + e + '</button>';
  holder.appendChild(element);
  element.onclick = () => {
    checkExisting = document.getElementById('userHolder');
    if (checkExisting != undefined) {checkExisting.remove();}
    toUserHold = document.getElementById('users');
    createNew = document.getElementById('createButton');
    BaseElem = document.createElement('div');
    BaseElem.id = 'userHolder';
    BaseElem.className = 'col-sm-7 people__selection';
    toUserHold.appendChild(BaseElem);
    TextElem = document.createElement('p');
    TextElem.className = 'heading';
    TextElem.innerHTML = 'Пройденные тесты'
    BaseElem.appendChild(TextElem);
    myUl = document.createElement('ul');
    myUl.className = 'list-group list-group-flush';
    BaseElem.appendChild(myUl);
    if (createNew != undefined) createNew.remove();
    findFile(path.join(process.cwd(), 'Users'), (files) => {
      files.forEach((file) => {
        data = require(file);
        data.forEach((user) => {
          if(user.test == e) {
            userDOM = document.createElement('li');
            userDOM.className = 'list-group-item people__text';
            userDOM.onclick = () => {
              console.log(path.resolve('Users', user.name+user.test));
              dialog.showOpenDialog(
                {
                  defaultPath: path.resolve('Users', user.name+user.test)
                }
              );
            }
            userDOM.innerHTML = '<img src="../../assets/svg/Logo.svg" alt="Logo" class="my-image people__margin">'+user.name;
            myUl.appendChild(userDOM);
          }
        })
      })
    })
  }
})