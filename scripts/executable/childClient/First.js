const fs = require('fs');
const path = require('path');
const audioWriter = require(path.join(process.cwd(), 'scripts/entities/AudioWriter.js'));
const os = require('os');
const timer = require(path.join(process.cwd(), 'scripts/entities/timer.js'));

const data =  require(path.join(process.cwd(), 'Users', os.hostname+'.json'));

displayText = document.getElementById('displayText');

pathToQuestion = path.join(process.cwd(), 'Tests', data[data.length-1].test, '1');

displayText.innerHTML = "<span>" + fs.readFileSync(pathToQuestion+'/content.txt', (err)=>{}).toString().replaceAll('\n', '<br/>')+ '</span>';

timer.timer(90).then((e) => {
  userFolderPath = path.join(process.cwd(), 'Users', data[data.length-1].name+data[data.length-1].test, '1');
  fs.mkdir(userFolderPath, {recursive:true}, (e)=>{});
  audioWriter.write(userFolderPath, "content.mp3", 120);
  micImg = document.getElementById('micImg');
  micImg.src = path.join(process.cwd(), 'assets/svg/mic_enabled.svg');
  timer.timer(120).then((e) => {
    window.location.href = path.join(process.cwd(), 'templates/childClient/Second.html');
  })
});