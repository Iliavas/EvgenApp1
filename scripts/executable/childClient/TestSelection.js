const fs = require('fs');

const path = require('path');

const os = require('os');


fs.readdir(path.join('Tests'), (err, files) => {
  f = files.map((e) => {
    console.log(e); 
    return {
      name: e,
      time: fs.statSync(path.join('Tests', e)).mtime.getTime()
    };
  }).sort((a, b) => {
    return a.time - b.time;
  }).map((e) => {return e.name}).forEach((e) => {
    pos = document.getElementById('toSelect');
    elToCreate = document.createElement('div');
    elToCreate.className = 'text-center d-flex p-2';
    elToCreate.innerHTML = '<button type="next" class="btn btn-primary btn-test btn-block">'+e+'</button>';
    elToCreate.onclick = () => {
      fs.mkdir(path.join('../..Users'), (err)=>{});
      //fs.mkdir(path.join(process.cwd()), (e)=>{})
      nameInp = document.getElementById('NameInput');
      myJSON = [{test:e, name:nameInp.value}];
      if (fs.existsSync(path.join(process.cwd(), 'Users', os.hostname+'.json'))) {
        myJSON = require(path.join(process.cwd(), 'Users', os.hostname+'.json'));
        myJSON.push({test:e, name:nameInp.value});
      }
      fs.writeFileSync(path.join(process.cwd(), 'Users', os.hostname+'.json'), JSON.stringify(myJSON), (e)=>{});      
      fs.mkdirSync(path.join(process.cwd(), 'Users', nameInp.value+e), (e)=>{});
      window.location.href = path.join(path.resolve('templates/childClient/First.html'));
    }
    document.getElementById('container').insertBefore(elToCreate, pos);
  });
})