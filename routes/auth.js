const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/keys');
const mongoose=require('mongoose');
const User=mongoose.model("User");
const {isAuth} = require('../middleware/requireLogin');


router.get('/createadmin',(req,res)=>{
	const password="ga123";
	bcrypt.hash(password,12)
	.then(hashedpassword=>{
		const user=new User({
			name:"Gyan Adesh",
			email:"gyanadesh1998@gmail.com",
			password:hashedpassword,
			isAdmin:true
		});
		user.save()
		.then(user=>{
			res.send(user);
		}).catch(err=>{
			console.log(err);
		})
	})
})


router.post('/signup',(req,res)=>{
	const {name,email,password}=req.body;
	if(!name||!email||!password){
		return res.status(422).json({error:"Please fill all the fields"});
	}
	User.findOne({email:email})
	.then(savedUser=>{
		if(savedUser){
			return res.status(422).json({error:"User already exist"});
		}
		bcrypt.hash(password,12)
		.then(hashedpassword=>{
			const user=new User({
				name,email,password:hashedpassword
			})
			user.save()
			.then(user=>{
				res.send({message:"Successfully saved",data:user});
			}).catch(err=>{
				console.log(err);
			})
		})
	}).catch(err=>{
		console.log(err);
	})
})


router.post('/signin',(req,res)=>{
	const {email,password}=req.body;
	if(!email||!password){
		return res.status(422).json({error:"Please fill all the fields"});
	}
	User.findOne({email:email})
	.then(savedUser=>{
		if(!savedUser){
			return res.status(422).json({error:"Invalid email or password"});
		}
		bcrypt.compare(password,savedUser.password)
		.then(doMatch=>{
			if(doMatch){
				const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
				const {_id,name,email}=savedUser;
				res.send({message:"Successfully signed in",token,user:{_id,name,email}});
			}
			else{
				return res.status(422).json({error:"Invalid email or password"});
			}
		}).catch(err=>{
			console.log(err);
		})
	}).catch(err=>{
			console.log(err);
		})
})

module.exports=router;