
const path = require('path');
const electron = require('electron');
// Module to control application life.
const { app } = electron;
// Module to create native browser window.
const { BrowserWindow } = electron;
// ipcMain
const { ipcMain } = electron;

const { Menu, Tray, MenuItem } = electron;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let loginWin;

function createWindow() {
  // Create the browser window.
  loginWin = new BrowserWindow({
    width: 800,
    height: 550,
    frame: false,
    resizable: false,//能否改变窗体大小
    'accept-first-mouse': true,
    show: false//是否显示界面 先设置否
  });

  // and load the index.html of the app.
  loginWin.loadURL('file://' + __dirname + '/login.html');

  // // Open the DevTools.
  // loginWin.webContents.openDevTools();

  loginWin.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    loginWin = null;
  });

  // sending messages from the main process to the renderer process
  loginWin.webContents.on('did-finish-load', () => {
    //loginWin.webContents.send('main-process-messages', 'webContents event "did-finish-load" called');
    loginWin.show();
  });

  //
  loginWin.webContents.on('new-window', function (event, url, fname, disposition, options) {
    var exec = require('child_process').exec; //加载node模块  url是将要跳转的地址
    //拦截url调用外部浏览器打开
    exec('start ' + url, function (err, stdout, stderr) { });
    event.preventDefault();
  });

  // 监听Renderer Process的消息。  
  ipcMain.on('login-window-min', function () {
    loginWin.minimize();
    loginWin.setSkipTaskbar(true);
  });
  //关闭所有窗口 调用ipc模块 主进程
  ipcMain.on('login-window-close', function () {
    app.quit();
  });
  //登录窗口最大化
  ipcMain.on('login-window-max', function () {
    if (loginWin.isMaximized()) {
      loginWin.restore();
    } else {
      loginWin.maximize();
    }
  });

  //显示右下角图标
  tray = new Tray(path.join(__dirname, '/icon/icon.ico'))//右下角的图标
  const contextMenu = Menu.buildFromTemplate([//右键菜单项 可以是多个 这里只有关闭一个项
    {
      label: '关闭', click: function () {
        app.quit();
      }
    },
    //{label: 'Item2', type: 'radio'},
  ]);

  // 给右下角图标绑定右键菜单
  tray.setContextMenu(contextMenu);

  // 绑定双击事件，让其窗口显示
  tray.on('double-click', function () {
    if (contentWindow) {
      contentWindow.show();
    } else {
      loginWin.show();
    }
  })

  //内容窗口显示 一般登录成功才行
  var contentWindow = null;
  var remindWindow = null;
  ipcMain.on('content-window-show', function () {
    // UserInfo = u;   event, u
    // console.log(u);
    //先隐藏登录窗口
    setTimeout(function () {
      loginWin.hide();
      loginWin.setSkipTaskbar(true);
    }, 1800);

    //创建内容窗口   
    if (contentWindow) {
      contentWindow.focus();
      return;
    }
    contentWindow = new BrowserWindow({
      frame: false,
      height: 700,
      resizable: false,
      width: 900,
      //icon:'3.ico',
      frame: false,
      show: false,
    });
    contentWindow.loadURL('file://' + __dirname + '/mainWin.html');
    
    contentWindow.webContents.openDevTools();
    contentWindow.webContents.on('did-finish-load', function () {
      contentWindow.show();
    });
    // contentWindow.setSkipTaskbar(true);
    //// contentWindow.webContents.openDevTools()
    contentWindow.on('closed', function () {
      contentWindow = null;
    });
    contentWindow.webContents.on('new-window', function (event, url, fname, disposition, options) {
      var exec = require('child_process').exec;
      //拦截url调用外部浏览器打开
      exec('start ' + url, function (err, stdout, stderr) { });
      event.preventDefault();
    });

  });

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.