const fs = require('fs');
const os = require('os');
const path = require('path');
const AudioWriter = require('../../entities/AudioWriter');
const timer = require(path.join('../../entities/timer.js'));
const audioWriter = require(path.join('../../entities/AudioWriter.js'));

userData = require(path.join(process.cwd(), 'Users', os.hostname+'.json'));
userData = userData[userData.length-1];

let skipFunc = () => {}

document.getElementById("skipButton").onclick = () =>{
  skipFunc();
}

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
    newElem.className = 'Themes text-center';
    newElem.innerHTML = '<button type="next" class="btn btn-primary btn-test">' + stringElem +'</button>';
    document.getElementById('container').insertBefore(newElem, pos);
    timer.timer(3).then((e) => {
      fs.mkdirSync(path.join(process.cwd(), 'Users', userData.name+userData.test, '3'), (e)=>{});
      dataToWrite = stringElem;
      fs.writeFileSync(path.join(process.cwd(), 'Users', userData.name+userData.test, '3', 'select.txt'), dataToWrite, (e)=>{});
      recorder = new AudioWriter.writer();
      skipFunc = () => {recorder.stop();}
      recorder.write(path.join(process.cwd(), 'Users', userData.name+userData.test, '3'), 'content.mp3', 120, functionAfter=() => {
        window.location.href = '../../templates/childClient/TestSelection.html';
      });
    })
  }
  element.innerHTML = '<button type="next" class="btn btn-primary btn-test">' + stringElem +'</button>';
  element.className = 'Themes text-center';
  console.log(element);
  pos = document.getElementById('herePush');
  pos.appendChild(element);
  //el = document.getElementById('container').insertBefore(element, pos);
})