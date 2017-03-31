/*
* spa.js
* Root namespace module
*/

/*global $, spa */
var spa = (function () {
    var initModule = function ($container) {
        // housekeeping here ...
        // if we needed to configure the Shell,
        // we would invoke spa.shell.configModule first
        spa.shell.initModule($container);
    };
    return { initModule: initModule };
}());