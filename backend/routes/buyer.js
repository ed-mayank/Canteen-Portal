var express = require("express");
var router = express.Router();
const buyerHash = require('bcryptjs')

// Load User model
const User = require("../models/buyer");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    User.find(function(err, users) {
		if (err) {
			console.log(err);
		} else {
			res.json(users);
		}
	})
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date,
        contact: req.body.contact,
        age: req.body.age,
        batch: req.body.batch,
        password: req.body.password,
        wallet: req.body.wallet
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// POST request 
// Login
router.post('/login', async (req,res)=>{
    try {
        const {email,password} = req.body;
        // if(!email || !password){
        //     return res.status(400).json({"error":"Some fields are empty"});
        // }
  
        const buyerLogin = await User.findOne({email:email});
  
        if(buyerLogin){
            
            const buyerPasswordMatch = await buyerHash.compare(password,buyerLogin.password);
  
            // const token = await vendorLogin.generateAuthToken();
            // res.cookie("jwt",token,{
            //     expires: new Date(Date.now() + 120000),
            //     httpOnly:true
            // });
  
            if(buyerPasswordMatch){
                console.log("Login succesful");
                res.json({buyerLogin})
            }else{
                res.json(null);
            }
        }else{
            res.json(null)
        }
    }
    catch(err){
        console.log(err);
    }
  })
//=================================================

  router.post("/buyerfind",(req,res) =>{
      User.findById(req.body.user_id)
      .then(user=>{
          if(!user){

          }else{
              res.json(user);
              return user;
          }
      })
  })

  router.post("/buyerupdate/:id",(req,res) => {
      User.findById(req.params.id)
      .then(user => {
          user.name = req.body.name;
          user.email = req.body.email;
          user.contact = req.body.contact;
          user.age = req.body.age;
          user.batch = req.body.batch;
          user.password = req.body.password;
          user.wallet = req.body.wallet; 

          user.save()
          .then(user => {
              res.json(user);
          })
          .catch((err)=>{
              console.log(err);
          })
      })
  })

  //============================================

module.exports = router;

