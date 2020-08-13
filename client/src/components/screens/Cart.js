import React,{useState,useEffect} from 'react';
import '../../App.css';
import {Link,useHistory} from 'react-router-dom'; 
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {detailsProduct} from '../../actions/productActions';
import {addToCart,removeFromCart} from '../../actions/cartActions';


const Cart=(props)=>{
    
    const productId=props.match.params.id;
    const qty=props.location.search?Number(props.location.search.split("=")[1]):1;
    const cart=useSelector(state=>state.cart);
    const {cartItems}=cart;
    const dispatch=useDispatch();


    useEffect(()=>{
    	if(productId){
    		dispatch(addToCart(productId,qty));
    	}
    	return ()=>{
    	};
    },[])


    const removeCart=(productId)=>{
    	dispatch(removeFromCart(productId));
    }
    
    const checkoutH=()=>{
    	props.history.push("/signin?redirect=shipping");
    }

	return (
		<div className="small-container cart-page">
		<table className="highlight">
			<thead>
				<tr>
					<th>Product</th>
					<th>Quantity</th>
					<th>Subtotal</th>
				</tr>
			</thead>
			<tbody>
				{cartItems.length===0?<div>Cart is empty</div>:
					cartItems.map(item=>(
						<tr>
							<td>
								<div className="cart-info">
									<img src={item.url} alt=""/>
									<div>
										<p>{item.title}</p>
										<small>Price: {item.price}</small>
										<br/>
										<button onClick={()=>removeCart(item.product)} className="btnn">Remove</button>
									</div>
								</div>
							</td>
							<td>
								<select value={item.qty} onChange={(e)=>dispatch(addToCart(item.product,e.target.value))} className="browser-default">
									{[...Array(item.count).keys()].map(x=>
									<option key={x+1} value={x+1}>{x+1}</option>
									)}
								</select>
							</td>
							<td>{item.price}</td>
						</tr>
						))}
			</tbody>
		</table>

		<div className="total-price">
			<table>
				<tr>
					<td>Subtotal</td>
					<td>{cartItems.reduce((a,c)=>a+c.qty,0)}</td>
				</tr>
				<tr>
					<td>Total</td>
					<td>Rs {cartItems.reduce((a,c)=>a+c.price*c.qty,0)}</td>
				</tr>
			</table>
		</div>
		<button className="btnn" style={{float:"right"}} onClick={checkoutH} disabled={cartItems.length===0}>Proceed to Checkout</button>
		</div>
		);
}

export default Cart; 