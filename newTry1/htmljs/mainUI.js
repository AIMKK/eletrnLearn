'use strict'
const createUI=require('./createwindow');
function mainUI(BrowserWindow) {
    try {
        if (!BrowserWindow||!createUI)
            return null;
        var win = createUI(BrowserWindow,{
            width: 1000, height: 600, frame: false
            //, resizable: false
            //,transparent: true 

        },'/../frontend/html/mainUI.html');
       
        // 打开窗口的调试工具
        //win.webContents.openDevTools();
        // 窗口关闭的监听
        // win.on('closed', () => {
        //     win = null;
        // });

    }
    catch (exception) {

    }

    return win;
}

module.exports = mainUI;