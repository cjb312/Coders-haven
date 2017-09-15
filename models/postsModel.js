var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
	author: { type: String, required: true, unique: false},
	title: { type: String, required: true, unique: true },
	body: String,
	upvotes: { type: Number, default: 0 },
	downvotes: { type: Number, default: 0 },
	date: { type: Date, default: Date.now()},
	// comments:[{type: Schema.Types.ObjectId, ref: "Comment"}]
});

var Posts = mongoose.model('Posts',postSchema);

module.exports = Posts;
