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
    additional: {
        type: String
        // required: true
    }
});

const EditFoodItems = mongoose.model('FoodItems',foodSchema);
module.exports = EditFoodItems;