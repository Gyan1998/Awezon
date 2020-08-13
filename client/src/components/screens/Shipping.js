import React, {useState,useEffect} from "react";
import '../../App.css';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {saveShipping} from '../../actions/cartActions';
import CheckoutSteps from '../CheckoutSteps';
const Shipping=(props)=>{

	const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [postalcode,setPostalcode]=useState("");
    const [country,setCountry]=useState("");


    const userSignup=useSelector(state=>state.userSignup);
    const {loading,userInfo,error}=userSignup;
    const dispatch=useDispatch();



    const PostData=()=>{
        dispatch(saveShipping({address,city,postalcode,country}));
        props.history.push('/payment');
    }


	return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <div className="mycard">
            <div className="card authcard input-field">
                <h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></h2>
                <input type="text" placeholder="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <input type="text" placeholder="city" value={city} onChange={(e)=>setCity(e.target.value)}/>
                <input type="text" placeholder="postal code" value={postalcode} onChange={(e)=>setPostalcode(e.target.value)}/>
                <input type="text" placeholder="country" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                <button className="btnn" onClick={()=>PostData()}>Continue
                </button>
            </div>
        </div>
        </div>
		);
}

export default Shipping; 