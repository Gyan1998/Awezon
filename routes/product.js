const express=require('express');
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config/keys');
const mongoose=require('mongoose');
const Product=mongoose.model("Product");
const {isAuth,isAdmin} = require('../middleware/requireLogin');


router.get('/allproducts',async(req,res)=>{
	const products=await Product.find({});
	res.send(products);
})

router.get('/allproducts/:id',async(req,res)=>{
	const product=await Product.findOne({_id:req.params.id});
	if(product){
		res.send(product);
	}
	else{
		res.status(404).send({message:"product not found"});
	}
})

router.post('/allproducts',isAuth,isAdmin,async(req,res)=>{
	const {title,url,category,price,count,description,rating}=req.body;
	if(!title||!url||!category||!price||!count||!description||!rating){
		return res.status(422).json({error:"please fill all the fields"});
	}
	const product=new Product({
		title,url,category,price,count,description,rating
	})
	const newProduct=await product.save();
	if(newProduct){
			return res.status(201).send({message:"product created",data:newProduct});
	}
	return res.status(500).send({error:"product created"});
})

router.put('/allproducts/:id',isAuth,isAdmin,async(req,res)=>{
	const productId=req.params.id;
	const product=await Product.findById(productId);
	if(product){
		product.title=req.body.title;
		product.url=req.body.url;
		product.category=req.body.category;
		product.price=req.body.price;
		product.count=req.body.count;
		product.description=req.body.description;
		product.rating=req.body.rating;
		const updatedProduct=await product.save();
		if(updatedProduct){
			return res.status(200).send({message:"product updated",data:updatedProduct});
		}
	}
	return res.status(500).send({error:"error in updating product"});
})

router.delete('/allproducts/:id',isAuth,isAdmin,async(req,res)=>{
	const del=await Product.findById(req.params.id);
	console.log(del);
	if(del){
		await del.remove()
		res.send({message:"product deleted"});
	}
	else{
		res.send({error:"error in deletion"});
	}
})

module.exports=router;