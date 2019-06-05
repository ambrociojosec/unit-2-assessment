var mongoose = require('mongoose');

var valueSchema = new mongoose.Schema({
	text: String
});

module.exports = mongoose.model('Inde', studentSchema);