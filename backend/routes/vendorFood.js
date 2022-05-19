var express = require("express");
var router = express.Router();

const vendorFood = require("../models/food");

router.get("/", function(req, res) {
    vendorFood.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

router.post("/food", (req,res) => {
    const newFood = new vendorFood({
        name: req.body.name,
        foodType: req.body.foodType,
        price: req.body.price,
        veg: req.body.veg,
        rating: req.body.rating,
        totalUsers: req.body.totalUsers,
        additional: req.body.additional,
        vendorID: req.body.vendorID
    });

    newFood.save()
        .then(user =>{
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

router.post("/find",(req,res) => {
    vendorFood.findById(req.body.food_id)
    .then(food => {
        if(!food){
            // return res.statusMessage(404).json(null);
        }
        else{
            res.json(food);
            return food;
        }
    })
})

router.post("/update/:id",(req,res) => {
    vendorFood.findById(req.params.id)
    .then(food => {
        food.name = req.body.name;
        food.foodType = req.body.foodType;
        food.price = req.body.price;
        food.veg = req.body.veg;
        food.rating = req.body.rating;
        food.totalUsers = req.body.totalUsers;
        food.additional = req.body.additional;
        food.vendorID = req.body.vendorID

        food.save()
        .then(food => {
            res.json(food);
            alert("Updated");
        })
        .catch((err) => {
            console.log(err);
        })
    })
})

router.delete("/delete/:id",(req,res) => {
    vendorFood.findByIdAndDelete(req.params.id)
    .then(deletefood=>{
        res.json(vendorFood)
    })
    .catch((err)=>{
        console.log(err)
    })
})

module.exports = router