const fs = require('fs');
const path = require('path');

const os = require('os');
const timer = require(path.join(process.cwd(), 'scripts/entities/timer.js'));

const data =  require(path.join(process.cwd(), 'Users', os.hostname+'.json'));

displayText = document.getElementById('displayText');

pathToQuestion = path.join(process.cwd(), 'Tests', data.test, '1');

displayText.innerHTML = "<span>" + fs.readFileSync(pathToQuestion+'/content.txt', (err)=>{}).toString().replaceAll('\n', '<br/>')+ '</span>';

timer.timer(10).then((e) => {console.log('sosi')});