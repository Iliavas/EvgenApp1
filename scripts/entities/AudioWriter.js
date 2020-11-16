const fs = require('fs')
const path = require('path');


module.exports = {
  write: function(filepath, name, time) {
    setTimeout(()=>{
      sound = document.createElement('audio');
      sound.src = path.join(process.cwd(), 'assets/sounds/beep.mp3');
      document.body.appendChild(sound);
      sound.autoplay = true;
      micImg = document.getElementById('micImg');
      micImg.src = path.join(process.cwd(), 'assets/svg/mic_enabled.svg');
    }, 3000);
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream => {handlerFunction(stream); rec.start();
      setTimeout(()=>{rec.stop();}, time*1000);})

    let rec;
    function handlerFunction(stream) {
      rec = new MediaRecorder(stream);
      ttime = time;
      i = 1;
      fs.writeFileSync(path.join(filepath, 'bin.mp3'), '', (e)=>{});
      while (ttime > 0) {
        setTimeout(() =>{
          rec.requestData();
        }, i*1000*Math.max(5, 5-ttime));
        ttime-=5;
        i++;
      }
      rec.ondataavailable = e => {
        audioChunks = [];
        audioChunks.push(e.data);
        let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
        sendData(blob);
      }
    }
    function sendData(data) {
      reader = data.stream().getReader();
      reader.read().then((e)=>{
        fs.appendFileSync(path.join(filepath, 'bin.mp3'), e.value);
      //fs.unlinkSync(path.join(filepath, 'bin'), (e)=>{console.log(e);});
      });
      //fs.writeFileSync(path.join(filepath, 'bin'), dat
    }     
  } 
}