const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/keys');
const mongoose=require('mongoose');
const User=mongoose.model("User");
const fp=require('../dev-data/featuredproduct.json');
const lp=require('../dev-data/latestproduct.json');
const hr=require('../dev-data/header.json');
const cg=require('../dev-data/categories.json');
const of=require('../dev-data/offer.json');
const tl=require('../dev-data/testimonial.json');
const bd=require('../dev-data/brand.json');
const ap=require('../dev-data/allproduct.json');
const requireLogin = require('../middleware/requireLogin');


router.get("/header",(req,res)=>{
	res.send(hr);
})

router.get("/categories",(req,res)=>{
	res.send(cg);
})

router.get("/featuredproducts",(req,res)=>{
	res.send(fp);
})

router.get("/latestproducts",(req,res)=>{
	res.send(lp);
})

router.get("/offers",(req,res)=>{
	res.send(of);
})

router.get("/testimonials",(req,res)=>{
	res.send(tl);
})

router.get("/brands",(req,res)=>{
	res.send(bd);
})

// router.get("/allproducts",(req,res)=>{
// 	res.send(ap);
// })

// router.get("/allproducts/:id",(req,res)=>{
// 	const productId=req.params.id;
// 	const product=ap.find(x=>x._id===productId);
// 	if(product){
// 		//console.log(product);
// 		res.send(product);
// 	}
// 	else{
// 		res.status(404).send({ msg:"Product Not Found"});
// 	}
	
// })


module.exports=router;