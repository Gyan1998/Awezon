import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL,PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL,PRODUCT_DELETE_REQUEST,PRODUCT_DELETE_SUCCESS,PRODUCT_DELETE_FAIL} from '../constants/productConstants';
import axios from 'axios';
import M from 'materialize-css';


const listFeaturedProducts=()=>async(dispatch)=>{
	try{
	    dispatch({type:PRODUCT_LIST_REQUEST});
	    fetch("/featuredproducts")
	    .then(res=>res.json())
	    .then(result=>{
	    	dispatch({type:PRODUCT_LIST_SUCCESS,payload:result});
	    })
	}
	catch(error){
		dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
	}
}

const listAllProducts=()=>async(dispatch)=>{

   try{
		dispatch({type:PRODUCT_LIST_REQUEST});
		const {data}=await axios.get('/allproducts');
		dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
	}
	catch(error){
		dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
	}
}

const listCategoriesProducts=()=>async(dispatch)=>{
	try{
	    dispatch({type:PRODUCT_LIST_REQUEST});
	    fetch("/categories")
	    .then(res=>res.json())
	    .then(result=>{
	    	dispatch({type:PRODUCT_LIST_SUCCESS,payload:result});
	    })
	}
	catch(error){
		dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
	}
}

const listLatestProducts=()=>async(dispatch)=>{
	try{
	    dispatch({type:PRODUCT_LIST_REQUEST});
	    fetch("/latestproducts")
	    .then(res=>res.json())
	    .then(result=>{
	    	dispatch({type:PRODUCT_LIST_SUCCESS,payload:result});
	    })
	}
	catch(error){
		dispatch({type:PRODUCT_LIST_FAIL,payload:error.message});
	}
}

const saveProduct=(product)=>async(dispatch)=>{
	try{
		dispatch({type:PRODUCT_SAVE_REQUEST,payload:product});
		if(!product._id){
			const {data}=await axios.post('/allproducts',product,{
				headers:{
					"authorization":"Bearer " + localStorage.getItem("jwt")
				}
			})
			dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data});
			M.toast({
            html: "Created successfully",
            classes: "#43a047 green darken-1",
        });
		}
		else{
			const {data}=await axios.put('/allproducts/'+product._id,product,{
				headers:{
					"authorization":"Bearer " + localStorage.getItem("jwt")
				}
			})
			dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data});
			M.toast({
            html: "Updated successfully",
            classes: "#43a047 green darken-1",
        });
		}
	}
	catch(error){
		if(product._id)
			dispatch({type:PRODUCT_SAVE_FAIL,payload:"User is not the Admin"});
		else if(!product.title||!product.url||!product.category||!product.price||!product.count||!product.description||!product.rating)
			dispatch({type:PRODUCT_SAVE_FAIL,payload:"Please fill all the fields"});
		else
			dispatch({type:PRODUCT_SAVE_FAIL,payload:"User is not the Admin"});
	}
}


const deleteProduct=(productId)=>async(dispatch)=>{
	try{
		dispatch({type:PRODUCT_DELETE_REQUEST,payload:productId});
		const {data}=await axios.delete('/allproducts/'+productId,{
			headers:{
				"authorization":"Bearer " + localStorage.getItem("jwt")
			}
		})
		dispatch({type:PRODUCT_DELETE_SUCCESS,payload:data,success:true});
		M.toast({
            html: "Deleted successfully",
            classes: "#43a047 green darken-1",
        });
	}
	catch(error){
		dispatch({type:PRODUCT_DELETE_FAIL,payload:error.message});
		M.toast({
            html: "User is not the Admin",
            classes: "#43a047 red darken-1",
        });
	}
}


const detailsProduct=(productId)=>async(dispatch)=>{
	try{
	    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId});
	    const {data}=await axios.get("/allproducts/"+productId);
	    dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
	}
	catch(error){
		dispatch({type:PRODUCT_DETAILS_FAIL,payload:error.message});
	}
}



export {listFeaturedProducts,listAllProducts,listCategoriesProducts,listLatestProducts,detailsProduct,saveProduct,deleteProduct};