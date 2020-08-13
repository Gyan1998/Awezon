import React, { useState,useEffect} from "react";
import '../../App.css';
import M from 'materialize-css';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {detailsProduct} from '../../actions/productActions';
import {listAllProducts} from '../../actions/productActions';






const Produtdetails=(props)=>{
    
    const [qty,setQty]=useState(1);
   

    const productList=useSelector(state=>state.productList);
    const {products,loading1,error1}=productList;

    

    const productDetails=useSelector(state=>state.productDetails);
    const {product,loading,error}=productDetails;
    const dispatch=useDispatch();
    useEffect(()=>{
    	dispatch(detailsProduct(props.match.params.id));
    	dispatch(listAllProducts());
    	return ()=>{
    	};
    },[])
    
  

    // const [ph,setPh]=useState("");
    // const Cf=(content)=>{
    // 	setPh(content);
    // }
    const handleCart=()=>{
    		props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
    }

	return (

<div>
	{loading?<div>loading...</div>:
	error?<div>{error}</div>:
	<div className="small-container single-product">
		<div className="row1">
			<div className="col-2">
				<img src={product.url} alt="" width="100%"/>
				{/*<div className="small-img-row">
					<div className="small-img-col">
						<img src={product.url} alt="" width="100%" height="70%" className="smallimg"  onClick={()=>Cf(product.url)}/>
					</div>
					<div className="small-img-col">
						<img src={gallery2} alt="" width="100%" height="70%" className="smallimg" onClick={()=>Cf(gallery2)}/>
					</div>
					<div className="small-img-col">
						<img src={gallery3} alt="" width="100%" height="70%" className="smallimg"  onClick={()=>Cf(gallery3)}/>
					</div>
					<div className="small-img-col">
						<img src={gallery4} alt="" width="100%" height="70%" className="smallimg"  onClick={()=>Cf(gallery4)}/>
					</div>
				</div>*/}
			</div>
			<div className="col-2">
				<p>Home / {product.category}</p>
				<h1>{product.title}</h1>
				<p>Rating: {product.rating}</p>
				<h3>Rs {product.price}</h3>
				{product.count>0?
					<div>
				<select className="browser-default">
                    <option disabled selected>Select Size</option>
					<option>XXL</option>
					<option>XL</option>
					<option>Large</option>
					<option>Medium</option>
					<option>Small</option>
                </select>
				<b style={{color:"#555"}}>Qty</b>:<select className="browser-default" value={qty} onChange={(e)=>setQty(e.target.value)}>
						{[...Array(product.count).keys()].map(x=>
							<option key={x+1} value={x+1}>{x+1}</option>
							)}
					</select>
					<button onClick={handleCart} className="btnn">Add To Cart</button></div>:<b style={{color:"red"}}>Out of stock</b>}
				
				<h2>Product Details</h2><br/>
				<p>{product.description}</p>
			</div>
		</div>
	</div>
}

	<div className="small-container">
		<div className="row1 row-2">
			<h2>Related Products</h2>
			<p>View More</p>
		</div>
	</div>


	<div className="small-container">
		<div className="row1">
		{products.slice(0,4).map(fp=>(
			<div className="col-4">
				<a href={'/productdetails/'+fp._id}><img src={fp.url} alt="" /></a>
				<h6>{fp.title}</h6>
				<div className="rating">
					{[...Array(Math.floor(fp.rating)).keys()].map(x=>
					<i className="material-icons" style={{color:"#ff523b"}}>star</i>
					)}
					{[...Array(Math.ceil(fp.rating)-Math.floor(fp.rating)).keys()].map(x=>
					<i className="material-icons" style={{color:"#ff523b"}}>star_half</i>
					)}
					{[...Array(5-Math.ceil(fp.rating)).keys()].map(x=>
					<i className="material-icons" style={{color:"#ff523b"}}>star_border</i>
					)}
				</div>
				<p>Rating: {fp.rating}</p>
				<p>Rs {fp.price}</p>
			</div>
			))}
		</div>
	</div>
</div>
		);
}

export default Produtdetails; 