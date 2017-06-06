const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const { ipcMain } = electron;
const windowManager = require('electron-window-manager');
const globalInfo=require('./Comm/GlobalInfo.js');
global.globalInfo = globalInfo;
let win;
 
//
app.on('ready', () => {
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

// minimize
ipcMain.on('minimize-window', function (event, winName) {
    try {      
        //minimize        
        windowManager.minimize(winName);
    }
    catch (exception) {

    }

});

// maximize
ipcMain.on('maximize-window', function (event, winName) {
    try {      
        //maximize        
        windowManager.maximize(winName);
    }
    catch (exception) {

    }

});


