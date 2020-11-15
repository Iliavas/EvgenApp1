const {dialog} = require('electron').remote;

module.exports = {
  get: function(after) {
    getLocationFromWindow(after);  
  }
}


function getLocationFromWindow(after) {
  var data;
  return dialog.showOpenDialog({ 
    properties: ['openFile'],
    filters: [
        {name: 'All Files', extensions: ['wav', 'mp3', 'm4a']}
    ],
  }).then((data) => {
    if (!data.canceled) {
      after(data.filePaths[0]);
    }
    else {}
  })
}