const { app, BrowserWindow } = require('electron')

function createWindow () {
   const win = new BrowserWindow({
     width: 800,
     height: 600,
     webPreferences: {
       nodeIntegration: true,
       enableRemoteModule: true,
     }
   })
 
   win.loadFile('templates/teacherClient/Third.html')
   win.webContents.openDevTools()
}
 
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
if (process.platform !== 'darwin') {
   app.quit()
}
})

app.on('activate', () => {
   if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
      console.log('fuck you');
   }
})