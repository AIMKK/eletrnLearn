const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const { ipcMain } = electron;

const windowManager = require('electron-window-manager');

// var loginUI = require('./htmljs/loginUI');
// var mainUI;
let win;

// app.on('ready', () => {   
//      var UI = require('./htmljs/mainUI');
//     UI(BrowserWindow);
//     loginUI = require('./htmljs/loginUI');
//     loginUI(BrowserWindow);
// });

//
app.on('ready', () => {    
    var UI = require('./htmljs/mainUI');
    UI(windowManager);
  
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        // loginUI(BrowserWindow);
    }
});

// open,
ipcMain.on('open-window', function (name,title,url) {
    windowManager.init({});
    // Open a window
    windowManager.open(name, title, url);
});

// close
ipcMain.on('close-window', function (name) {
    //close
    windowManager.close(name);
});
