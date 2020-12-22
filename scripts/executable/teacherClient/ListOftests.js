const fs = require('fs');
const path = require('path');
const {dialog} = require('electron').remote;

const getTestPath = require("../../../scripts/entities/getCurrentTestPath.js")


function findFile(folderLoc, totalFunc) {
  files = fs.readdirSync(folderLoc);
  res = [];
  for (i = 0; i < files.length; ++i) {
    loc = files[i].split('.');
    if (loc[loc.length-1] == 'json') res.push(path.join(folderLoc, files[i]));
  }
  totalFunc(res);
}

function deleteFunc() {
  console.log(this);
  fs.rmdir(path.join(process.cwd(), "Tests", this.content), {recursive: true}, (e)=> {});
  window.location.href = "../../templates/teacherClient/ListOftests1.html";
}

function updateFunc() {
  console.log(this);
  getTestPath.setPath(this.content);
  window.location.href = "../../templates/teacherClient/First.html"
}

const UsersPath = path.join(process.cwd(), "Users");
const TestPath = path.join(process.cwd(), "Tests")

if (!fs.existsSync(UsersPath)) fs.mkdirSync(UsersPath);
if (!fs.existsSync(TestPath)) fs.mkdirSync(TestPath);

tests = fs.readdirSync(TestPath, (e)=>{});
holder = document.getElementById('testsHolder')

document.getElementById('createButton').onclick = () => {
  //console.log(path.resolve("templates/teacherClient/GetNameOfTest.html"))
  window.location.href =  "../../templates/teacherClient/GetNameOfTest.html";
}

tests.forEach((e)=>{
  element = document.createElement('div');
  element.innerHTML ='<button type="button" class="btn btn-lg my-btn bg-my text mx-auto flex-test-container"><div>' + e + '</div></button>';
  element.className = "flex-test-container"
  let commandPalet = document.createElement("div");
  commandPalet.className = "cmd";
  commandPalet.innerHTML = "<img src=' "+ "../../assets/svg/trash-empty.svg" +"' class='delete' name='delete'> <img src='"+
    "../../assets/svg/file-text.svg"+"' class='update' name='update'> <img src='" + "../../assets/svg/flame.svg" + " ' class='show-res' name='res'>";
  console.log(commandPalet.elements);
  commandPalet.children[0].onclick = deleteFunc.bind({content: e});
  commandPalet.children[1].onclick = updateFunc.bind({content: e});
  commandPalet.children[2].onclick = () => {
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
  element.firstChild.appendChild(commandPalet);
  holder.appendChild(element);
})

let createNew = document.createElement("button")
createNew.innerHTML = "создать новый тест"
createNew.className = "btn btn-lg my-btn bg-my text mx-auto"
createNew.onclick = () => {
  window.location.href = "../../templates/teacherClient/GetNameOfTest.html";
}

holder.appendChild(createNew);