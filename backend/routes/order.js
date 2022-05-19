var express = require("express");
var router = express.Router();

const orderFood = require("../models/foodOrder");

router.get("/", function(req, res) {
    orderFood.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.post("/order", (req,res) => {
    console.log(req.body.vid)
    const newOrder = new orderFood({
        name: req.body.name,
        foodType: req.body.foodType,
        price: req.body.price,
        veg: req.body.veg,
        rating: req.body.rating,
        additional: req.body.additional,
        shop: req.body.shop,
        ordertime: req.body.ordertime,
        quantity: req.body.quantity,
        customerID: req.body.customerID,
        vendorID: req.body.vendorID
    });

    newOrder.save()
        .then(user =>{
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router