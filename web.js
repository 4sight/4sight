var port=Number(process.env.PORT || 3000);
var gzippo = require('gzippo');
    var express = require('express');
    var app = express();
    
    app.use(gzippo.staticGzip("" + __dirname + "/app"));
    app.listen(process.env.PORT || 3000);