const mongoose = require('mongoose');
const passwordHash = require('bcryptjs');

const vendorSchema = new mongoose.Schema({
    name: {
        type: String
        // required:true
    },
    shop: {
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
    opentime: {
        type: String
        // required: true
    },
    closetime: {
        type: String
        // required: true
    },
    password: {
        type: String
        // required: true
    }
});

//Password hashing

vendorSchema.pre('save', async function(next){  //middleware
    if(this.isModified('password')){   //hash the password whenever password is changed
        this.password = await passwordHash.hash(this.password,12);
        next();
    }
})

const Vendor = mongoose.model('VENDOR',vendorSchema);
module.exports = Vendor;