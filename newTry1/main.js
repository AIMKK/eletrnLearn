const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const { ipcMain } = electron;
const windowManager = require('electron-window-manager');
const GlobalInfo=require('./Comm/GlobalInfo');

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
    //
    windowManager.init();   
    // var mainUI = require('./htmljs/mainUI');
    // mainUI.Show();
GlobalInfo.userCode='dfd';
    var loginUI = require('./htmljs/loginUI');
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
    console.log(url);
    var UI = require(url);
    UI.Show();
});

// close
ipcMain.on('close-window', function (event, winName) { 
    try{
         console.log(GlobalInfo.userCode);
        //close
        windowManager.close(winName);  
    } 
    catch (exception){

    }
   
});

