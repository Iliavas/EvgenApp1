const fs = require('fs');
const path = require('path');

const os = require('os');
const AudioWriter = require('../../entities/AudioWriter');

const timer = require(path.join('../../entities/timer.js'));

const audioWriter = require(path.join('../../entities/AudioWriter.js'));

let skipFunc = () => {

}

userdata = require(path.join(process.cwd(), 'Users', os.hostname+'.json'));
userdata = userdata[userdata.length - 1];

audio = document.getElementById('readAudio');
src = fs.readdirSync(path.join(process.cwd(), 'Tests', userdata.test, '2'), (e)=>{console.log(e);})
audio.src = path.join(process.cwd(), 'Tests', userdata.test, '2', src[0]);
fs.mkdirSync(path.join(process.cwd(), "Users", userdata.name+userdata.test, '2'), {recursive: true}, (e)=> {});
timer.timer(3).then((e) => {
  //audio.play();
  let recorder = new AudioWriter.writer();
  recorder.write(path.join(process.cwd(), 'Users', userdata.name+userdata.test, '2'), 'content.mp3', Math.ceil(audio.duration),
  functionAfter = () => {
    window.location.href = path.resolve('templates/childClient/Third.html');
  }, audioProvided=true);
  skipFunc = () => {
    recorder.stop();
  }
  /*timer.timer(Math.ceil(audio.duration)).then((e)=> {
    fs.mkdir(path.join(process.cwd(), 'Users', userdata.name+userdata.test, '2'), (e)=>{});
    timer.timer(125).then((e) => {
      window.location.href = path.join('../../../templates/childClient/Third.html');
    })
  });*/
})


document.getElementById("skipButton").onclick = (e) => {
  skipFunc();
}