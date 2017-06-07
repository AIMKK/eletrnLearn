

'use strict';

const windowManager = require('electron-window-manager');
//
function show() {
    try {
        if (!windowManager)
            return null;            
        //
        windowManager.init();
        // // Open a window        
        // var win=windowManager.open('loginUI', 'loginUI','/../frontend/html/loginUI.html',null,{
        //     width: 400, height: 250, frame: false
        //     , resizable: false
        //     ,icon: __dirname + '/../images/icon.png'
        //     ,backgroundColor: '#0099CB'    
        //     ,show: false
        //     //,transparent: true 
        // });  

        //     
        var win=windowManager.createNew('loginUI', 'loginUI','/../frontend/html/loginUI.html',null,{
            width: 400, height: 250, frame: false
            , resizable: false
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
var loginUI={
    show:show
}
module.exports = loginUI;