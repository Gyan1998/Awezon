const mongoose=require('mongoose');

const postSchema=new mongoose.Schema({
	image:{
		type:String,
		required:true
	}
})

mongoose.model("Post",postSchema);