'use strict';
(function () {
    try {
        var electron = require('electron');
        var ipc = electron.ipcRenderer;
        var remote = electron.remote;
        var globalInfo = remote.getGlobal('globalInfo');
        //
        new Vue({
            el: '#titleBarBtns',           
            methods: {
                minimize: function (event) {
                    ipc.send('minimize-window', 'mainUI');
                },
                maximize: function (event) {
                    ipc.send('maximize-window', 'mainUI');
                },
                close: function (event) {                   
                    ipc.send('close-window', 'mainUI');
                },
                mouseleave:function (event) {                   
                    // alert(event.target.id);
                    // alert(event.srcElement.id);
                    event.target.blur();
                }
            }
        })
    } catch (error) {
        alert(error);
    }
})();