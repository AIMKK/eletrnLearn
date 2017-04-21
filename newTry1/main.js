const electron = require('electron');
const { app } = electron;
const { BrowserWindow } = electron;
const windowManager = require('electron-window-manager');
var loginUI = require('./htmljs/loginUI');
var mainUI;
let win;

// app.on('ready', () => {   
//      var UI = require('./htmljs/mainUI');
//     UI(BrowserWindow);
//     loginUI = require('./htmljs/loginUI');
//     loginUI(BrowserWindow);
// });

app.on('ready', ()=> {
    // windowManager.init({});
    // // Open a window
    windowManager.open('home', 'Welcome ...', './htmljs/mainUI');
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