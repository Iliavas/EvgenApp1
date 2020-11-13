const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');
const getAudioPath = require('../../entities/getFileLocationFromWindow.js');


document.getElementById('submitButton').onclick = () => {
  wd = path.join(getTestPath.getPath(), '2');
  fs.mkdir(wd, (err)=>{});
  getAudioPath.get((audioLoc) => {
    if (!audioLoc.length) return;
    name = 'content.' + audioLoc.split('.')[audioLoc.split('.').length-1];
    fs.writeFile(path.join(wd, 'content.' + audioLoc.split('.')[audioLoc.split('.').length-1]), '', (err)=>{});
    fs.copyFileSync(audioLoc, path.join(wd, name));
    window.location.href = path.join(process.cwd(), 'templates/teacherClient/Third.html');
  });
}