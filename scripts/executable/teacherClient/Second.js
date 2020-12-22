const fs = require('fs');
const path = require('path');
const getTestPath = require('../../entities/getCurrentTestPath.js');
const getAudioPath = require('../../entities/getFileLocationFromWindow.js');

if (fs.existsSync(path.join(getTestPath.getPath(), '2', "buffer.txt"))) {
  document.getElementById("currentAudio").innerHTML = fs.readFileSync(path.join(getTestPath.getPath(), '2', "buffer.txt"))
}

document.getElementById('submitButton').onclick = () => {
  wd = path.join(getTestPath.getPath(), '2');
  fs.mkdir(wd, (err)=>{});
  getAudioPath.get((audioLoc) => {
    if (!audioLoc.length) return;
    let name = 'content.' + audioLoc.split('.')[audioLoc.split('.').length-1];
    fs.writeFile(path.join(wd, 'content.' + audioLoc.split('.')[audioLoc.split('.').length-1]), '', (err)=>{});
    fs.copyFileSync(audioLoc, path.join(wd, name));
    document.getElementById("currentAudio").innerHTML = audioLoc;
    fs.writeFileSync(path.join(wd, "buffer.txt"), audioLoc);
    //window.location.href = path.join('../../templates/teacherClient/Third.html');
  });
}

document.getElementById("nextButton").onclick = () => {
  window.location.href = path.join('../../templates/teacherClient/Third.html');
}

document.getElementById("prevButton").onclick = () => {
  window.location.href = path.join('../../templates/teacherClient/First.html');
}