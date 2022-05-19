const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const PORT = 4000;
const DB_NAME = "tutorial"

dotenv.config({path: './config.env'});
const DB = process.env.DATABASE;

// routes
var testAPIRouter = require("./routes/testAPI");
var UserRouter = require("./routes/buyer");
var vendorRouter = require("./routes/vendor");
var Foodrouter = require("./routes/vendorFood");
var Orderrouter = require("./routes/order");
// var editFoodRouter = require("./routes/EditFood");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connection to MongoDB
mongoose.connect(DB);
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully !");
})

// setup API endpoints
app.use("/testAPI", testAPIRouter);
app.use("/buyer", UserRouter);
app.use("/vendor",vendorRouter);
app.use("/items",Foodrouter);
app.use("/orderitems",Orderrouter);
// app.use("/editfood/items",editFoodRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
