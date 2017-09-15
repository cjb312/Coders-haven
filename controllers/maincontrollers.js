'use strict';
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Posts = require('../models/postsModel.js');
// var Comments = require('../models/posts.js');
mongoose.Promise = global.Promise;



module.exports = function(app) {

	app.post('/newpost', function(req,res) {
    // console.log("req.body: ", req.body);
		var userData = req.body.newForm;

    // console.log("userData: ", userData);
		var newPost = new Posts(userData);

		Object.assign(newPost, userData);
    // console.log("newPost: ", newPost);

		newPost.save(function(err, record) {
			if(err){
				throw err;
			}
				console.log("saved to the db");
				console.log("record: ", record);
		    res.send("data recieved");
		});
	});

	// app.post('/api/newcomment', function(req,res) {
	// 	var newComment = new Comments(req.body);
	//
	// 	newComment.save(function(err) {
	// 		if(err) throw err;
	// 		res.send("Comment saved!");
	// 	});
	//
	// });

	app.get('/api/getposts', function(req,res) {
		Posts.find()
		//.populate("comments")
		.exec(function(error, data) {
			if(error) {
				console.log(error);
				console.log("check your comments id route");
			} else {
				res.json(data);
				// console.log(data.comments);
				// console.log("pushed data to front end");
			}
		});
	});
};
