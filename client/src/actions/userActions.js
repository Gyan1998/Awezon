import {USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL,USER_SIGNUP_REQUEST,USER_SIGNUP_SUCCESS,USER_SIGNUP_FAIL,USER_LOGOUT} from '../constants/userConstants';
import Axios from 'axios';
import Cookie from 'js-cookie';
import M from 'materialize-css';

const signin=(email,password)=>async(dispatch)=>{
	dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
	try{
		const {data}=await Axios.post("/signin",{email,password});
		localStorage.setItem("jwt", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
		dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
		Cookie.set('userInfo',JSON.stringify(data));
		M.toast({
            html: "Signed in successfully",
            classes: "#43a047 green darken-1",
        });
	}
	catch(error){
		if(!email||!password)
			dispatch({type:USER_SIGNIN_FAIL,payload:"Please fill all the fields"});
		else
			dispatch({type:USER_SIGNIN_FAIL,payload:"Invalid email or password"});
	}
}

const signup=(name,email,password)=>async(dispatch)=>{
	dispatch({type:USER_SIGNUP_REQUEST,payload:{name,email,password}});
	try{
		const {data}=await Axios.post("/signup",{name,email,password});
		dispatch({type:USER_SIGNUP_SUCCESS,payload:data});
		M.toast({
            html: "Saved successfully",
            classes: "#43a047 green darken-1",
        });
	}
	catch(error){
		if(!name||!email||!password)
			dispatch({type:USER_SIGNIN_FAIL,payload:"Please fill all the fields"});
		else
			dispatch({type:USER_SIGNIN_FAIL,payload:"User already exist"});
	}
}

const clear=()=>(dispatch)=>{
	dispatch({type:USER_LOGOUT,payload:{}});
	Cookie.set('userInfo',null);
}

export {signin,signup,clear};