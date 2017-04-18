const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
var loginUI = require('./htmljs/loginUI');
var mainUI;
let win;



app.on('ready', () => {   
     var UI = require('./htmljs/mainUI');
    UI(BrowserWindow);
});

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