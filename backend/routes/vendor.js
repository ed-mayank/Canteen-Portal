var express = require("express");
var router = express.Router();
const vendorHash = require('bcryptjs')

// Load User model
const Vendor = require("../models/vendor");

// GET request 
// Getting all the users
router.get("/", function(req, res) {
    Vendor.find(function(err, users) {
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
    const newUser = new Vendor({
        name: req.body.name,
        shop: req.body.shop,
        email: req.body.email,
        contact: req.body.contact,
        opentime: req.body.opentime,
        closetime: req.body.closetime,
        password: req.body.password
    });
    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

// // POST request 
// // Login
// router.post("/login", (req, res) => {
// 	const email = req.body.email;
//     const password = req.body.password;
    
// 	// Find user by email
// 	Vendor.findOne({ email }).then(user => {
// 		if (!user) {
// 			res.json(null);
//         }
//         else{
//             // res.send("found")
//             Vendor.findOne({ password }).then(userpass => {
//                 if(userpass){
//                     res.send("found");
//                     const vendorPasswordMatch = vendorHash.compare(password,);
//                     console.log(vendorPasswordMatch)
//                 }
//                 else{
//                     res.json(null);
//                 }
//             })
//             console.log("found")
//         }
// 	});
// });

router.post('/login', async (req,res)=>{
    try {
        const {email,password} = req.body;
        // if(!email || !password){
        //     return res.status(400).json({"error":"Some fields are empty"});
        // }
  
        const vendorLogin = await Vendor.findOne({email:email});
  
        if(vendorLogin){
            
            const vendorPasswordMatch = await vendorHash.compare(password,vendorLogin.password);
  
            // const token = await vendorLogin.generateAuthToken();
            // res.cookie("jwt",token,{
            //     expires: new Date(Date.now() + 120000),
            //     httpOnly:true
            // });
  
            if(vendorPasswordMatch){
                console.log("Login succesful");
                res.json(vendorLogin)
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

  router.post("/vendorfind",(req,res) =>{
    Vendor.findById(req.body.vendor_id)
    .then(user=>{
        if(!user){

        }else{
            res.json(user);
            return user;
        }
    })
})

router.post("/vendorupdate/:id",(req,res) => {
    Vendor.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.shop = req.body.shop;
        user.email = req.body.email;
        user.contact = req.body.contact;
        user.opentime = req.body.opentime;
        user.closetime = req.body.closetime;
        user.password = req.body.password 

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

