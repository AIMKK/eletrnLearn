'use strict'

const windowManager = require('electron-window-manager');
//
function Show() {
    try {
        if (!windowManager)
            return null; 
        windowManager.init();
        //Open a window
        windowManager.open('mainUI', 'mainUI','/../frontend/html/mainUI.html',null,{
            width: 1000, height: 600
            , frame: false
            , resizable: true  
            ,icon: __dirname + '/../images/icon.png' 
            ,backgroundColor: '#0099CB'         
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