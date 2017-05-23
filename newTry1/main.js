const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const { ipcMain } = electron;
const windowManager = require('electron-window-manager');
const GlobalInfo=require('./Comm/GlobalInfo.js');
// const GlobalInfo2=require('./coMM/GlobalInfo.js');
global.APPGlobalInfo = GlobalInfo;
let win;
 
//
app.on('ready', () => {   
    windowManager.init();
    // var mainUI = require('./htmljs/mainUI');
    // mainUI.Show();    
    var loginUI = require('./htmljs/loginUI.js');    
    loginUI.Show();
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
ipcMain.on('open-window', function (event, url) {   
    var UI = require(url);
    UI.Show();
});

// close
ipcMain.on('close-window', function (event, winName) {
    try {      
        //close
        windowManager.close(winName);
    }
    catch (exception) {

    }

});

