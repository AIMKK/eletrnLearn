
(function () {
    try {
        var electron = require('electron');
        var ipc = electron.ipcRenderer;
        var remote = electron.remote;
        var GlobalInfo = remote.getGlobal('APPGlobalInfo');       
    } catch (error) {
        alert(error);
    }
})();