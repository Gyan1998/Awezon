import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Link,useHistory} from 'react-router-dom'; 
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {detailsProduct} from '../../actions/productActions';
import {addToCart,removeFromCart} from '../../actions/cartActions';
import {signin} from '../../actions/userActions';
import CheckoutSteps from '../CheckoutSteps';

const Placeorder=(props)=>{
    
    const cart=useSelector(state=>state.cart);
    const {cartItems,shipping,payment}=cart;


    const userSignin=useSelector(state=>state.userSignin);
    const {userInfo}=userSignin;


    if(!userInfo){
    	props.history.push("/signin?redirect=shipping");
    }
    else if(!shipping.address){
    	props.history.push("/shipping");
    }
    else if(!payment.paymethod){
    	props.history.push("/payment");
    }
  
    const dispatch=useDispatch();

    const itemsPrice=cartItems.reduce((a,c)=>a+c.price*c.qty,0);
    const shippingPrice=itemsPrice>100?0:10;
    const taxPrice=0.15*itemsPrice;
    const totalPrice=itemsPrice+shippingPrice+taxPrice;


    const placeorderH=()=>{
    	//hghjgjhg
    }
    useEffect(()=>{
    	return ()=>{
    	};
    },[])



	return (

		<div>
            <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
            <div className="small-container cart-page">
	            <div className="placeorder">
		            <div className="placeorder-info">
			            <div>
			            	<h3>Shipping</h3>
				            <div>
				            	{cart.shipping.address},{cart.shipping.city},{cart.shipping.postalcode},{cart.shipping.country}
				            </div>
			            </div>
			            <br/>
			            <div>
			            	<h3>Payment</h3>
				            <div>
				            	Payment Method: {cart.payment.paymethod}
				            </div>
			            </div>
		            </div>
		        </div>
		<table>
			<tr>
				<th>Product</th>
				<th>Quantity</th>
				<th>Subtotal</th>
			</tr>
			{cartItems.length===0?<div>Cart is empty</div>:
				cartItems.map(item=>(
					<tr>
						<td>
							<div className="cart-info">
								<img src={item.url} alt=""/>
								<div>
									<p>{item.title}</p>
									<small>Price: {item.price}</small>
								</div>
							</div>
						</td>
						<td>
							{item.qty}
						</td>
						<td>{item.price}</td>
					</tr>
					))}
		</table>

		<div className="total-price">
			<table>
			<caption><h3>OrderSummary</h3></caption>
				<tr>
					<td>Subtotal</td>
					<td>Rs {itemsPrice}</td>
				</tr>
				<tr>
					<td>Shipping</td>
					<td>Rs {shippingPrice}</td>
				</tr>
				<tr>
					<td>Tax</td>
					<td>Rs {taxPrice}</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>Rs {totalPrice}</td>
				</tr>
			</table>
		</div>
		<button className="btnn" style={{float:"right"}}>Place Order</button>
		</div>
        </div>
		);
}

export default Placeorder; 