(function () {

  //const remote = require('electron').remote;

  var ipc = require('electron').ipcRenderer;

  function init() {
    document.getElementById("min-btn").addEventListener("click", function (e) {
      ipc.send('login-window-min');//发送了一个login-window-min的消息，这个消息将在 main.js中接受，名称可以自定义。
      //const window = remote.getCurrentWindow();
      //window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      ipc.send('login-window-max');
      // const window = remote.getCurrentWindow();
      // if (!window.isMaximized()) {
      //   window.maximize();
      // } else {
      //   window.unmaximize();
      //   }
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      ipc.send('login-window-close');
      //const window = remote.getCurrentWindow();
      //window.close();
    });

    document.getElementById("ok").addEventListener("click", function (e) {
      ipc.send('content-window-show');
      //const window = remote.getCurrentWindow();
      //window.close();
    });
  };

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      init();
    }
  };
})();