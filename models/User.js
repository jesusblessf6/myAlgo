var mongoose = require('./mongodb');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name : String,
	loginName : String,
	password : String,
	description : String
});

var User = mongoose.model('User', UserSchema);
module.exports = User;