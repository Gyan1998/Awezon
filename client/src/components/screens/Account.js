import React,{useState} from 'react';
import '../../App.css';
import {Link,useHistory} from 'react-router-dom'; 
import M from 'materialize-css';



const Account=()=>{

    const LoginForm=document.getElementById("LoginForm");
    const RegForm=document.getElementById("RegForm");
    const Ind=document.getElementById("In");
    const register=()=>{
    RegForm.style.transform="translateX(0px)";
    LoginForm.style.transform="translateX(0px)";
    }
    const login=()=>{
    RegForm.style.transform="translateX(300px)";
    LoginForm.style.transform="translateX(300px)";
    }

	return (
	<div className="account-page">
		<div className="container1">
			<div className="row1">
				<div className="col-2">
					<img src="/images/image1.png" width="100%" alt=""/>
				</div>
				<div className="col-2">
					<div className="form-container">
						<div className="form-btn">
							<span onClick={login}>login</span>
							<span onClick={register}>Register</span>
							<hr id="In"/>
						</div>
						<form id="LoginForm">
							<input type="text" placeholder="Username"/>
							<input type="password" placeholder="Password"/>
							<button type="submit" class="btnn">Login</button>
							<a href="">Forgot Password</a>
						</form>
						<form id="RegForm">
							<input type="text" placeholder="Username"/>
							<input type="email" placeholder="Email"/>
							<input type="password" placeholder="Password"/>
							<button type="submit" class="btnn">Register</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
		);
}

export default Account; 