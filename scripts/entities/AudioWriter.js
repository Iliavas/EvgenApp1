const recorder = require('node-record-lpcm16')
const fs = require('fs')

module.exports = {
  write: function() {
  const file = fs.createWriteStream(filepath, { encoding: 'binary' })

  const recording = recorder.record()
  recording.stream().pipe(file)


  // Stop recording after three seconds
  setTimeout(() => {
    recording.stop()
  }, time)

  } 
}