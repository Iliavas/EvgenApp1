const fs = require('fs');
const path = require('path');
const audioWriter = require(path.join('../../entities/AudioWriter.js'));
const os = require('os');
const AudioWriter = require('../../entities/AudioWriter');
const timer = require(path.join('../../entities/timer.js'));

const data =  require(path.join(process.cwd(), 'Users', os.hostname+'.json'));

displayText = document.getElementById('displayText');

pathToQuestion = path.join(process.cwd(), 'Tests', data[data.length-1].test, '1');

displayText.innerHTML = "<span>" + fs.readFileSync(pathToQuestion+'/content.txt', (err)=>{}).toString().replaceAll('\n', '<br/>')+ '</span>';

stopFunc = () => {
  timer.stop();
}

document.getElementById("skipButton").onclick = (e) => {
  stopFunc();
}

timer.timer(90).then((e) => {
  let recorder = new AudioWriter.writer();
  stopFunc = () => {
    //timer.stop();
    recorder.stop();
  }
  userFolderPath = path.join(process.cwd(), 'Users', data[data.length-1].name+data[data.length-1].test, '1');
  fs.mkdir(userFolderPath, {recursive:true}, (e)=>{});
  recorder.write(userFolderPath, "content.mp3", 15, functionAfter=()=> {
    window.location.href = path.resolve('templates/childClient/Second.html');
  });
});