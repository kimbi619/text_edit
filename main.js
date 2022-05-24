const electron = require('electron')
const fs = require('fs');

const { app, BrowserWindow, ipcMain, dialog } = electron

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
  })

  mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
  
})

ipcMain.on('save', (e, data) =>{

  dialog.showSaveDialog(mainWindow, {defaultPath: 'filename.txt'}, (path) => {
    console.log(data)
    if(path){
      // fs.writeFile(path, data, (err) =>{
      //   if(err){
      //     console.log('error kimbi', err)
      //   }
      // });

    }
  })
})
