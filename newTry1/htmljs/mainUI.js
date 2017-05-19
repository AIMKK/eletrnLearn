'use strict'
// const createUI=require('./createwindow');
// function mainUI(BrowserWindow) {
//     try {
//         if (!BrowserWindow||!createUI)
//             return null;
//         var win = createUI(BrowserWindow,{
//             width: 1000, height: 600, frame: false
//             //, resizable: false
//             //,transparent: true 

//         },'/../frontend/html/mainUI.html');

//         // 打开窗口的调试工具
//         //win.webContents.openDevTools();
//         // 窗口关闭的监听
//         // win.on('closed', () => {
//         //     win = null;
//         // });

//     }
//     catch (exception) {

//     }

//     return win;
// }

// module.exports = mainUI;

const windowManager = require('electron-window-manager');
//
function Show() {
    try {
        if (!windowManager)
            return null; 
        //Open a window
        windowManager.open('mainUI', 'MainUI','/../frontend/html/mainUI2.html',null,{
            width: 1000, height: 600
            , frame: false
            , resizable: true  
            ,icon: __dirname + '/../images/icon.png'          
            //,transparent: true 
        });
        //windowManager.open('mainui', 'Welcome mainui', '/../frontend/html/mainUI.html');
    }
    catch (exception) {

    }
}
//
var mainUI={
    Show:Show
}
module.exports = mainUI;