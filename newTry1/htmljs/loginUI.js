

'use strict';

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
    Show:Show,

}
module.exports = loginUI;