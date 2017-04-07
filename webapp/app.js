/*
* app.js - Hello World
*/
/*jslint node : true, continue : true,
devel : true, indent : 2, maxerr : 50,
newcap : true, nomen : true, plusplus : true,
regexp : true, sloppy : true, vars : false,
white : true
/*
* app.js - Simple express server with logging
*/
// ------------ BEGIN MODULE SCOPE VARIABLES --------------
'use strict';
var
    http = require('http'),
    express = require('express'),
    routes = require( './routes' ),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    basicAuth = require('basic-auth-connect'),
    app = express(),
    server = http.createServer(app);

     

   
// ------------- END MODULE SCOPE VARIABLES ---------------
// ------------- BEGIN SERVER CONFIGURATION ---------------

app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(methodOverride());  // simulate DELETE and PUT

app.use(basicAuth('user', 'spa'));
// app.use(function(req, res, next) {
//     var user = auth(req);

//     if (user === undefined || user['name'] !== 'username' || user['pass'] !== 'password') {
//         res.writeHead(401, 'Access invalid for user', {'Content-Type' : 'text/plain'});
//         res.end('Invalid credentials');
//     } else {
//         next();
//     }
// });
app.use(express.static(__dirname+'/../'));
//app.use( app.router );


// app.configure(function () {
//     app.use(bodyParser());
//     app.use(methodOverride());
// });
// app.configure('development', function () {
//     app.use(morgan('dev'));
//     app.use(express.errorHandler({
//         dumpExceptions: true,
//         showStack: true
//     }));
// });
// app.configure('production', function () {
//     app.use(express.errorHandler());
// });

routes.configRoutes( app, server );
// -------------- END SERVER CONFIGURATION ----------------
// ----------------- BEGIN START SERVER -------------------
server.listen(3000);
console.log(
    'Express server listening on port %d in %s mode',
    server.address().port, app.settings.env
);
// ------------------ END START SERVER --------------------