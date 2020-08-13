import React, {useState,useEffect} from "react";
import '../../App.css';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {savePayment} from '../../actions/cartActions';
import CheckoutSteps from '../CheckoutSteps';

const Payment=(props)=>{

	const [paymethod,setPaymethod]=useState("");

    const dispatch=useDispatch();



    const PostData=()=>{
        dispatch(savePayment({paymethod}));
        props.history.push('/placeorder');
    }


	return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <div className="mycard">
                <div className="card authcard input-field">
                <h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></h2>
                    <p>
                    <label>
                      <input className="with-gap" type="radio" value="paypal" onChange={(e)=>setPaymethod(e.target.value)}/>
                      <span>Paypal</span>
                    </label>
                    </p><br/>
                    <button className="btnn" onClick={()=>PostData()}>Continue
                </button>
                </div>
            </div>
        </div>
		);
}

export default Payment; 