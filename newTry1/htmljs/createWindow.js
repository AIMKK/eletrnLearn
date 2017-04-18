'use strict';
function windowUI(BrowserWindow,windowOptions,htmlUrl) {
    try {
        if (!BrowserWindow||!windowOptions||!htmlUrl)
            return null;
        var win = new BrowserWindow(windowOptions);
        win.loadURL('file://' + __dirname + htmlUrl);

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

module.exports = windowUI;