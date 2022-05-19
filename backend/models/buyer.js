const mongoose = require("mongoose");
const buyerHash  = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String
        // required:true
    },
    email: {
        type: String
        // required:true
    },
    contact: {
        type: String
        // required:true
    },
    age: {
        type: String
        // required: true
    },
    batch: {
        type: String
        // required: true
    },
    password: {
        type: String
        // required: true
    },
    wallet: {
        type: String
    }
});

userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await buyerHash.hash(this.password,10);
        next();
    }
})

const User = mongoose.model('BUYER',userSchema);
module.exports = User;