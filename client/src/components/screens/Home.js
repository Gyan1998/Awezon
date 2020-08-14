import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import M from 'materialize-css';
import Productdetails from './Productdetails';
import {useSelector,useDispatch} from 'react-redux';
import {listAllProducts} from '../../actions/productActions';


const Home=()=>{

    const productList=useSelector(state=>state.productList);
    const {products,loading,error}=productList;
    const dispatch=useDispatch();

    useEffect(()=>{
    	dispatch(listAllProducts());
    	return ()=>{
    	};
    },[])

    const [hr,setHR]=useState([]);
    const [cg,setCG]=useState([]);
    const [tl,setTL]=useState([]);
    const [bd,setBD]=useState([]);

    useEffect(()=>{

    	const fun1=()=>{
	    	fetch('/header')
	    	.then(res=>res.json())
	    	.then(result=>{
	    		setHR(result);
	    	})
    	}
    	const fun2=()=>{
	    	fetch('/categories')
	    	.then(res=>res.json())
	    	.then(result=>{
	    		setCG(result);
	    	})
    	}
    	const fun6=()=>{
	    	fetch('/testimonials')
	    	.then(res=>res.json())
	    	.then(result=>{
	    		setTL(result);
	    	})
    	}
    	const fun7=()=>{
	    	fetch('/brands')
	    	.then(res=>res.json())
	    	.then(result=>{
	    		setBD(result);
	    	})
    	}
    	fun1();
    	fun2();
    	fun6();
    	fun7();

    	return ()=>{
    	};
    },[])


	return (
		<div>
	{/*-----------------HEADERS----------------*/}

		  <div className="header1">
		   <div className="container1">
		   {hr.map(hr=>(
		   	<div className="row1">
		      <div className="col-2">
		        <h1>{hr.title1} <br/>{hr.title2}</h1>
		        <p>{hr.description1}<b/>{hr.description2}</p>
		        <a href="#cc" className="btnn">Explore Now &#8594;</a>
		      </div>  
		      <div className="col-2">
		        <img src={hr.url} alt="" className="i1" />
		      </div>  
		    </div>   
		   	))}
		   </div> 
		  </div>


    {/*-----------------CATEGORIES----------------*/}

		


    {/*-----------------FEATURED PRODUCTS----------------*/}

        
		<div id="cc" className="small-container">
		  <h2 className="title">Featured Products</h2>
		  <div className="row1">
		  {products.slice(0,4).map(fp=>(
		  	<div className="col-4">
		      <a href={'/productdetails/'+fp._id}><img src={fp.url} alt=""/></a>
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


    {/*-----------------LATEST PRODUCTS----------------*/}

		<h2 className="title">Latest Products</h2>
		<div className="row1">
        {products.slice(4,12).map(lp=>(
        	<div className="col-4">
		      <a href={'/productdetails/'+lp._id}><img src={lp.url} alt="" /></a>
		      <h6>{lp.title}</h6>
		      <div className="rating">
		        {[...Array(Math.floor(lp.rating)).keys()].map(x=>
				<i className="material-icons" style={{color:"#ff523b"}}>star</i>
				)}
				{[...Array(Math.ceil(lp.rating)-Math.floor(lp.rating)).keys()].map(x=>
				<i className="material-icons" style={{color:"#ff523b"}}>star_half</i>
				)}
				{[...Array(5-Math.ceil(lp.rating)).keys()].map(x=>
				<i className="material-icons" style={{color:"#ff523b"}}>star_border</i>
				)}
		      </div>
		      <p>Rating: {lp.rating}</p>
		      <p>Rs {lp.price}</p>
		    </div>
        	))}
		  </div>
		</div>


    {/*-----------------OFFER----------------*/}

		<div className="offer">
		  <div className="small-container">
		  {products.slice(12,13).map(of=>(
		  	<div className="row1">
		      <div className="col-2">
		        <img src={of.url} alt="" className="offer-img" />		      </div>
		      <div className="col-2">
		        <p>Exclusively Available on Store</p>
		        <h1>{of.title}</h1>
		        <small>{of.description}</small><br/>
		        <a href={'/productdetails/'+of._id} className="btnn">Buy Now &#8594;</a>
		      </div>
		    </div>
		  	))}
		  </div>
		</div>


    {/*-----------------TESTIMONIAL----------------*/}

		<div className="testimonial">
		  <div className="small-container">
		    <div className="row1">
		    {tl.map(tl=>(
			    <div className="col-3">
			        <i className="fa fa-quote-left"></i>
			        <p>{tl.description}</p>
			        <div className="rating">
					    {[...Array(Math.floor(tl.rating)).keys()].map(x=>
						<i className="material-icons" style={{color:"#ff523b"}}>star</i>
						)}
						{[...Array(Math.ceil(tl.rating)-Math.floor(tl.rating)).keys()].map(x=>
						<i className="material-icons" style={{color:"#ff523b"}}>star_half</i>
						)}
						{[...Array(5-Math.ceil(tl.rating)).keys()].map(x=>
						<i className="material-icons" style={{color:"#ff523b"}}>star_border</i>
						)}
			        </div>
			        <img src={tl.url} alt="" />
			        <h3>{tl.name}</h3>
			    </div>
		    	))}
		  </div>
		  </div>
		  </div>


    {/*-----------------BRANDS----------------*/}

			<div className="brands">
			  <div className="small-container">
			    <div className="row1">
			    {bd.map(bd=>(
			    	<div className="col-5">
				        <img src={bd.url} alt="" />
			        </div>
			        ))}
			    </div>
			  </div>
			</div>

		</div>
		);
}

export default Home; 