/*
* spa.js
* Root namespace module
*/

/*global $, spa */
var spa = (function () {
    'use strict';
    var initModule = function ($container) {
        spa.model.initModule();
        // housekeeping here ...
        // if we needed to configure the Shell,
        // we would invoke spa.shell.configModule first
        spa.shell.initModule($container);
    };
    return { initModule: initModule };
}());