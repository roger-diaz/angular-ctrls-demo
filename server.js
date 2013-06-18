var express = require('express');
var app = express.createServer();

app.configure( function(){
	app.use(express.bodyParser());
	app.use(express.static(__dirname + "/public"));
});

app.listen(3000);