 import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {listAllProducts} from '../../actions/productActions';


const Products=()=>{
    
    const productList=useSelector(state=>state.productList);
    const {products,loading,error}=productList;
    const dispatch=useDispatch();

    useEffect(()=>{
    	//dispatch(listAllProducts());
    	return ()=>{
    	};
    },[])

	return (

			<div className="small-container">
				<div className="row1 row-2">
					<h2>All Products</h2>
					<select className="browser-default">
                    	<option>All</option>
						<option>Short by price</option>
						<option>Short by popularity</option>
						<option>Short by rating</option>
						<option>Short by sale</option>
                	</select>
				</div>
				{loading?<div>loading...</div>:
		        error?<div>{error}</div>:
				<div className="row1">
				{products.map(ap=>(
					<div className="col-4">
						<a href={'/productdetails/'+ap._id}><img src={ap.url} alt="" /></a>
						<h6>{ap.title}</h6>
						<div className="rating">
						    {[...Array(Math.floor(ap.rating)).keys()].map(x=>
							<i className="material-icons" style={{color:"#ff523b"}}>star</i>
							)}
							{[...Array(Math.ceil(ap.rating)-Math.floor(ap.rating)).keys()].map(x=>
							<i className="material-icons" style={{color:"#ff523b"}}>star_half</i>
							)}
							{[...Array(5-Math.ceil(ap.rating)).keys()].map(x=>
							<i className="material-icons" style={{color:"#ff523b"}}>star_border</i>
							)}
						</div>
						<p>Rating: {ap.rating}</p>
						<p>Rs {ap.price}</p>
					</div>
					))}
				</div>
				}

	<div className="page-btn">
		<span>1</span>
		<span>2</span>
		<span>3</span>
		<span>4</span>
		<span>&#8594;</span>
	</div>
</div>
		);
}

export default Products; 