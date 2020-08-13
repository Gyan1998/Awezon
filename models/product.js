const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	url:{
		type:String,
		required:true
	},
	category:{
		type:String,
		required:true
	},
	price:{
		type:Number,
		default:0,
		required:true
	},
	count:{
		type:Number,
		default:0,
		required:true
	},
	description:{
		type:String,
		required:true
	},
	rating:{
		type:Number,
		default:0,
		required:true
	}
})

mongoose.model("Product",productSchema);