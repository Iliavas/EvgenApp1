const fs = require('fs');
const os = require('os');
const path = require('path');
const timer = require(path.join(process.cwd(), 'scripts/entities/timer.js'));
const audioWriter = require(path.join(process.cwd(), 'scripts/entities/AudioWriter.js'));

userData = require(path.join(process.cwd(), 'Users', os.hostname+'.json'));
userData = userData[userData.length-1];

questionData = fs.readFileSync(path.join(process.cwd(), 'Tests', userData.test, '3', 'content.txt'), (e, data) => {}).toString();
splittingData = questionData.split('\n');
console.log(splittingData);
data = []
splittingData.forEach((stringElem)=>{
  if (stringElem.length == 0) return;
  element = document.createElement('div');
  element.onclick = () => {
    themes = document.getElementsByClassName('Themes');
    while(themes.length) {themes[0].remove();}
    newElem = document.createElement('div');
    newElem.innerHTML = stringElem;
    document.body.insertBefore(newElem, pos);
    timer.timer(3).then((e) => {
      fs.mkdir(path.join(process.cwd(), 'Users', userData.name+userData.test, '3'), (e)=>{});
      dataToWrite = stringElem;
      fs.writeFile(path.join(process.cwd(), 'Users', userData.name+userData.test, '3', 'select.txt'), dataToWrite, (e)=>{});
      audioWriter.write(path.join(process.cwd(), 'Users', userData.name+userData.test, '3'), 'content.mp3', 5);
      timer.timer(6).then((e) => {});
    })
  }
  element.innerHTML = stringElem;
  element.className = 'Themes';
  console.log(element);
  pos = document.getElementById('herePush');
  el = document.body.insertBefore(element, pos);
})
for (i = 0; i < splittingData.length; ++i) {
  
}