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
    	dispatch(listAllProducts());
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
				
</div>
		);
}

export default Products; 