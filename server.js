/* jshint node: true */
"use strict";

var express = require("express");
var path = require('path');
var MongoClient = require('mongodb').MongoClient,
	assert = require('assert');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var url = 'mongodb://localhost:27017/codershavenTest';

mongoose.connect(url, {
	useMongoClient: true

});

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	// intercept OPTIONS method
		if ('OPTIONS' == req.method) {
			res.sendStatus(200);
		} else {
			next();
		}
};

app.use(allowCrossDomain);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var port = 3000;


require('./controllers/maincontrollers.js')(app);
// require('./migrations/seeds.js')(mongoose);
//Main route

app.listen(port, function() {
	console.log('App running on port ' + port);
});
