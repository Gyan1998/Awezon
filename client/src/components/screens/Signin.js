import React, {useState,useEffect} from "react";
import '../../App.css';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {signin} from '../../actions/userActions';

const Signin=(props)=>{

	const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const userSignin=useSelector(state=>state.userSignin);
    const {loading,userInfo,error}=userSignin;
    const dispatch=useDispatch();

     const redirect=props.location.search?props.location.search.split("=")[1]:'/';
     useEffect(()=>{
        if(userInfo){
            props.history.push(redirect);
        }
        return ()=>{
        };
    },[userInfo])

    const PostData=()=>{
        dispatch(signin(email,password));
    }


	return (
		<div className="mycard">
			<div className="card authcard input-field">
                <h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></h2>
                {loading && <div>Sending...</div>}
                {error && <div>{error}</div>}
		    	<input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
		    	<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
		    	<button className="btnn" onClick={()=>PostData()}>Signin
		  		</button>
		  		<h5>
		  		<Link to={redirect==="/" ? "signup" : "signup?redirect=" + redirect}>Don't have an account?</Link>
		  		</h5>
	    	</div>
        </div>
		);
}

export default Signin; 