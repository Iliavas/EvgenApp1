const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');
const getAudioPath = require('../../entities/getFileLocationFromWindow.js');

document.getElementById('submitButton').onclick = () => {
  wd = path.join(getTestPath.getPath(), '2');
  fs.mkdir(wd, (err)=>{});
  getAudioPath.get((audioLoc) => {
    fs.writeFile(path.join(wd, 'content.wav'), '', (err)=>{});
    fs.copyFileSync(audioLoc, path.join(wd, 'content.wav'));
    window.location.href = path.join(process.cwd(), 'templates/teacherClient/Third.html');
  });
}