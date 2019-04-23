const mongoose = require('mongoose');
const timestamp = require('mongoose-timestamp');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	email: {
		type: String,
		required: true,
		trim: true
	},
	phone_number: {
		type: String,
		required: true,
		trim: true
	}
});

CustomerSchema.plugin(timestamp);
const Customer = mongoose.model('Customer', CustomerSchema);
module.exports = Customer;
