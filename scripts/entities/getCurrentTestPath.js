const fs = require('fs');
const path = require('path');
module.exports = {
  getPath: function() {
    return fs.readFileSync(path.join(process.cwd(), 'buffer.txt'), 'utf8', (err) => {}).toString();},
  setPath: function(name) {
    fs.writeFileSync(path.join(process.cwd(), "buffer.txt"), path.join(process.cwd(), "Tests", name), (e) => {});
  }
}