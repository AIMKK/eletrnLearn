'use strict'

const windowManager = require('electron-window-manager');
//
function show() {
    try {
        if (!windowManager)
            return null; 
        windowManager.init();
        //Open a window
        var win=windowManager.createNew('mainUI', 'mainUI','/../frontend/html/mainUI.html',null,{
            width: 1000, height: 600
            , frame: false
            , resizable: true  
            ,icon: __dirname + '/../images/icon.png' 
            ,backgroundColor: '#0099CB'  
            ,show: false       
            //,transparent: true 
        });
        if(win) {
            win.create();
            win.onReady(true,function(window,windowContent){
                window.object.show();
            });
        }  
    }
    catch (exception) {

    }
}
//
var mainUI={
    show:show
}
module.exports = mainUI;