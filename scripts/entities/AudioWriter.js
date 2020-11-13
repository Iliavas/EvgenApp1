const fs = require('fs')
const path = require('path');

module.exports = {
  write: function(filepath, name, time) {
    navigator.mediaDevices.getUserMedia({audio:true})
    .then(stream => {handlerFunction(stream); rec.start();
      setTimeout(()=>{rec.stop();}, time*1000);})

    let rec;
    function handlerFunction(stream) {
      rec = new MediaRecorder(stream);
      rec.ondataavailable = e => {
        audioChunks = [];
        audioChunks.push(e.data);
        if (rec.state == "inactive"){
          let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
          sendData(blob)
        }
      }
    }
    function sendData(data) {
      ws = fs.createWriteStream(filepath+'/bin');
      reader = data.stream().getReader();
      reader.read().then((e)=>{
        fs.writeFileSync(path.join(filepath, 'bin'), e.value);
      const ffmpeg = require('ffmpeg');
      mp = new ffmpeg(path.join(filepath, 'bin'));
      mp.then((audio) => {
        audio.fnExtractSoundToMP3(path.join(filepath, name), (e, file)=>{});
      })
      //fs.unlinkSync(path.join(filepath, 'bin'), (e)=>{console.log(e);});
      });
      //fs.writeFileSync(path.join(filepath, 'bin'), dat
    }     
  } 
}