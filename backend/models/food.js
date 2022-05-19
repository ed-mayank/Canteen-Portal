const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: {
        type: String
        // required:true
    },
    foodType: {
        type: String
        // required:true
    },
    price: {
        type: String
        // required:true
    },
    veg: {
        type: String
        // required: true
    },
    rating: {
        type: String,
        required: true,
        min: 0,
		max: 5,
        default: 0
    },
    totalUsers: {
        type: Number,
        required: true,
        default: 0
    },
    additional: {
        type: [{ addon:String ,price: Number }],
		required: true
    },
    vendorID: {
        type: String
    }
});

const FoodItems = mongoose.model('FoodItems',foodSchema);
module.exports = FoodItems;