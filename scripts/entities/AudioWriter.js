const fs = require('fs')
const path = require('path');

const timer = require("./timer.js");

function write(filepath, name, time, functionAfter=()=>{}, isAudioProvided=false) {
  console.log(time, "time");
  setTimeout(()=>{
    sound = document.createElement('audio');
    sound.src = path.join(process.cwd(), 'assets/sounds/beep.mp3');
    document.body.appendChild(sound);
    sound.autoplay = true;
    micImg = document.getElementById('mic');
    micImg.src = path.resolve('assets/svg/mic_enabled.svg');
    let a = timer.timer(time).then(() => {functionAfter()});
    //console.log(a);
    if (isAudioProvided) {
      document.getElementById("readAudio").play();
    }
  }, 3000);
  navigator.mediaDevices.getUserMedia({audio:true})
  .then(stream => {handlerFunction(stream);
    setTimeout(()=>{this.rec.stop(); this.canWrite=false}, time*1000);})

  let handlerFunction = function (stream) {
    this.rec = new MediaRecorder(stream);
    this.rec.start();
    console.log(this.rec.state);
    ttime = time;
    i = 1;
    fs.writeFileSync(path.join(filepath, 'bin.mp3'), '', (e)=>{});
    while (ttime > 0) {
      setTimeout(() =>{
        console.log(this.rec.state);
        this.rec.requestData();
      }, i*1000*Math.max(5, 5-ttime));
      ttime-=5;
      i++;
    }
    this.rec.ondataavailable = e => {
      audioChunks = [];
      audioChunks.push(e.data);
      let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
      sendData(blob);
    }
  }
  handlerFunction = handlerFunction.bind(this);
  let sendData = function (data) {
    if (!this.canWrite) return;
    reader = data.stream().getReader();
    reader.read().then((e)=>{
      fs.appendFileSync(path.join(filepath, 'bin.mp3'), e.value);
    //fs.unlinkSync(path.join(filepath, 'bin'), (e)=>{console.log(e);});
    });
    //fs.writeFileSync(path.join(filepath, 'bin'), dat
  }
  sendData = sendData.bind(this);
}

function stop() {
  if (this.canWrite) this.rec.requestData();
  this.canWrite = false;
  timer.stop();
}

class AudioWriter {
  constructor() {
    this.rec = "";
    this.canWrite = true;
    console.log(this);
    this.write = write.bind(this);
    this.stop = stop.bind(this);
  }
}

module.exports = {
  writer: AudioWriter
}