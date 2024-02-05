const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
	building: {
		type: Number,
		required: false,
		trim: true
	},
	street: {
		type: String,
		required: true,
		trim: true
	},
	zipcode: {
		type: String,
		required: false,
		trim: true
	}
})

const Address = mongoose.model("Address", AddressSchema)

const RestrauntSchema = new mongoose.Schema({
	address: {
		type: AddressSchema,
	},
	cuisine: {
		type: String,
		required: true,
		trim: true
	},
	name: {
		type: String,
		required: true,
		trim: true
	},
	city: {
		type: String,
		required: false,
		trim: true
	},
	restaurant_id: {
		type: Number,
		required: true,
		trim: true
	}
})
const Restaurant = mongoose.model("Restaurant", RestrauntSchema)

module.exports = Restaurant
