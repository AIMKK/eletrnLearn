

'use strict';
// const createUI=require('./createwindow');
// function loginUI(BrowserWindow) {
//     try {
//          if (!BrowserWindow||!createUI)
//             return null;
//         var win = createUI(BrowserWindow,{
//             width: 400, height: 250, frame: false
//             , resizable: false
//             //,transparent: true 

//         },'/../frontend/html/loginUI.html');
       
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

// module.exports = loginUI;
const windowManager = require('electron-window-manager');
//
function Show() {
    try {
        if (!windowManager)
            return null;            
        //
        windowManager.init();
        // Open a window
        windowManager.open('loginUI', 'loginUI','/../frontend/html/loginUI.html',null,{
            width: 400, height: 250, frame: false
            , resizable: false
            //,transparent: true 
        });
        
    }
    catch (exception) {

    }
}
//
var loginUI={
    Show:Show
}
module.exports = loginUI;