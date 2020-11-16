const fs = require('fs');
const path = require('path');

const os = require('os');

const timer = require(path.join(process.cwd(), 'scripts/entities/timer.js'));

const audioWriter = require(path.join(process.cwd(), 'scripts/entities/AudioWriter.js'));

userdata = require(path.join(process.cwd(), 'Users', os.hostname+'.json'));
userdata = userdata[userdata.length - 1];

audio = document.getElementById('readAudio');
src = fs.readdirSync(path.join(process.cwd(), 'Tests', userdata.test, '2'), (e)=>{console.log(e);})
audio.src = path.join(process.cwd(), 'Tests', userdata.test, '2', src[0]);
timer.timer(3).then((e) => {
  audio.play(); 
  audioWriter.write(path.join(process.cwd(), 'Users', userdata.name+userdata.test, '2'), 'content.mp3', 120);
  timer.timer(Math.ceil(audio.duration)).then((e)=> {
    fs.mkdir(path.join(process.cwd(), 'Users', userdata.name+userdata.test, '2'), (e)=>{});
    timer.timer(125).then((e) => {
      window.location.href = path.join(process.cwd(), 'templates/childClient/Third.html');
    })
  });
})