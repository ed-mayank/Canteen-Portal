const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name: {
        type: String
    },
    foodType: {
        type: String
    },
    price: {
        type: Number
    },
    veg: {
        type: String
    },
    rating: {
        type: String
    },
    additional: {
        type: [{ addon:String ,price: Number }]
		// required: true
    },
    shop: {
        type: String,
        required: true
    },
    ordertime: {
        type: String
    },
    quantity: {
        type: Number
    },
    customerID: {
        type: String
    },
    vendorID: {
        type: String
    }
});

const Order = mongoose.model('OrderItems',orderSchema);
module.exports = Order;