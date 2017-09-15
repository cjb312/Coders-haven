var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
	author: { type: String, required: true},
	parentPostId: { type: String, required: true},
	body: String,
	upvotes: { type: Number, default: 0 },
	downvotes: { type: Number, default: 0 },
	date: { type: Date, default: Date.now()}
});

var Comments = mongoose.model('Comments',commentSchema);

module.exports = Comments;