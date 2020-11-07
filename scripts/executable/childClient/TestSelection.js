const fs = require('fs');

const path = require('path');

const os = require('os');

fs.readdir(path.join(process.cwd(), 'Tests'), (err, files) => {
  f = files.map((e) => {
    console.log(e); 
    return {
      name: e,
      time: fs.statSync(path.join(process.cwd(), 'Tests', e)).mtime.getTime()
    };
  }).sort((a, b) => {
    return a.time - b.time;
  }).map((e) => {return e.name}).forEach((e) => {
    pos = document.getElementById('toSelect');
    elToCreate = document.createElement('div');
    elToCreate.innerHTML = '<span>' + e + '</span>';
    elToCreate.onclick = () => {
      fs.mkdir(path.join(process.cwd(), 'Users'), (err)=>{});
      fs.mkdir(path.join(process.cwd()))
      fs.writeFile(path.join(process.cwd(), 'Users', os.hostname+'.json'), JSON.stringify({test:e}), (err)=>{});
      window.location.href = path.join(process.cwd(), 'templates/childClient');
    }
    document.body.insertBefore(elToCreate, pos);
  });
})