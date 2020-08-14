import React,{useEffect,useState} from 'react';
import '../App.css';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {signin,clear} from '../actions/userActions';

import {addToCart,removeFromCart} from '../actions/cartActions';


const Nav=()=>{


    const cart=useSelector(state=>state.cart);
    const {cartItems,shipping,payment}=cart;

    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;


    document.addEventListener('DOMContentLoaded', function() {
    	let options=null;
	    var elems = document.querySelectorAll('.sidenav');
	    var instances = M.Sidenav.init(elems, options);
    });

    const history=useHistory();
    const dispatch=useDispatch();
   

    const clearUser=()=>{
    	localStorage.clear();
    	dispatch(clear());
    	window.location.reload()    }

    
	return (
		<div>
		  <nav>
		     <div className="nav-wrapper" style={{background:"#ffd6d6"}}>
		      <a href="/" className="brand-logo" style={{left:"100px",top:"0px",fontWeight:"bold"}}><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></a>
		      <a href="#" data-target="mobile-demo" className="sidenav-trigger" style={{float:"right"}}><i className="material-icons">menu</i></a>
		      <a href="/cart" className="sidenav-trigger" style={{float:"right",display:"flex"}}><span><i className="material-icons" style={{color:"green"}}>add_shopping_cart</i></span><span style={{color:"maroon"}}>{cartItems.length===0?'':cartItems.length}</span></a>
		      <ul className="right hide-on-med-and-down">
			        <li><a href="/">Home</a></li>
			        <li><a href="/all_products">Products</a></li>
			        {userInfo ? 
			        <li><Link onClick={()=>clearUser()} to="/">Logout</Link></li>:
			    	<li></li>}
			        {userInfo ? 
			        <li><a href="/" className="aa">{userInfo.user.name}</a></li>:
			    	<li><a href="/signin">Account</a></li>}
			  </ul>
		    </div>
		  </nav>

		  <ul className="sidenav" id="mobile-demo" style={{background:"#ffd6d6"}}>
	            <li><a href="/">Home</a></li>
		        <li><a href="/all_products">Products</a></li>
		        {userInfo ? 
		        <li><Link onClick={()=>clearUser()} to="/">Logout</Link></li>:<li></li>}
		        {userInfo?<li><a href="/" className="aa">{userInfo.user.name}</a></li>:
			    <li><a href="/signin">Account</a></li>}
		  </ul>
		</div>
		);
}

export default Nav; 