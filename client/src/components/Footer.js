import React from 'react';
import '../App.css';




const Footer=()=>{
	return (
		<div className="footer">
		  <div className="container1">
		    <div className="row1">
		      <div className="footer-col-1">
		        <h3>Download Our App</h3>
		        <p>Download App for Android and IOS mobile phone.</p>
		        <div className="app-logo">
		          <img src="../../images/play-store.png" alt="" />
		          <img src="../../images/app-store.png" alt="" />
		        </div>
		      </div>
		      <div className="footer-col-2">
		        <a href="/" className="brand-logo" style={{fontWeight:"bold"}}><h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"white"}}>zon</span></h2></a>
		        <p>Our purpose is to hghjghjgjhghjgjh.</p>
		      </div>
		      <div className="footer-col-3">
		        <h3>Useful Links</h3>
		        <ul>
		          <li>Coupons</li>
		          <li>Blog Post</li>
		          <li>Return Policy</li>
		          <li>Join Affiliate</li>
		        </ul>
		        <p>Our purpose is to hghjghjgjhghjgjh.</p>
		      </div>
		      <div className="footer-col-4">
		        <h3>Follow Us</h3>
		        <ul>
		          <li>Facebook</li>
		          <li>Instagram</li>
		          <li>Twitter</li>
		          <li>YouTube</li>
		        </ul>
		        <p>Our purpose is to hghjghjgjhghjgjh.</p>
		      </div>
		    </div>
		    <hr/>
		    <p className="copyright">Copyright 2020 - Easy Tutorials</p>
		  </div>
		</div>
		);
}

export default Footer; 