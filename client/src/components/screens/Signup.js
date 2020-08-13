import React, {useState,useEffect} from "react";
import '../../App.css';
import {Link,useHistory} from 'react-router-dom';
import M from 'materialize-css';
import {useSelector,useDispatch} from 'react-redux';
import {signup} from '../../actions/userActions';

const Signup=(props)=>{

	const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");


    const userSignup=useSelector(state=>state.userSignup);
    const {loading,userInfo,error}=userSignup;
    const dispatch=useDispatch();

    const redirect=props.location.search?props.location.search.split("=")[1]:'/';
    useEffect(()=>{
        if(userInfo)
            props.history.push("/signin?redirect="+redirect);
        return ()=>{
        };
    },[userInfo])

    const PostData=()=>{
        dispatch(signup(name,email,password));
    }


	return (
		<div className="mycard">
			<div className="card authcard input-field">
		    	<h2><span style={{color:"#ff523b"}}>Awe</span><span style={{color:"black"}}>zon</span></h2>
                {loading && <div>Sending...</div>}
                {error && <div>{error}</div>}
		    	<input type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)}/>
		    	<input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
		    	<input type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
		    	<button className="btnn" onClick={()=>PostData()}>Signup
		  		</button>
		  		<h5>
		  		<Link to={redirect==="/" ? "signin" : "signin?redirect=" + redirect}>Already have an account?</Link>
		  		</h5>
	    	</div>
        </div>
		);
}

export default Signup; 