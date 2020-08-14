import React,{useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/screens/Home';
import Products from './components/screens/Products';
import Productdetails from './components/screens/Productdetails';
import Signup from './components/screens/Signup';
import Signin from './components/screens/Signin';
import Cart from './components/screens/Cart';
import Account from './components/screens/Account';
import Addproduct from './components/screens/Addproduct';
import Shipping from './components/screens/Shipping';
import Payment from './components/screens/Payment';
import Placeorder from './components/screens/Placeorder';
import Ss from './components/screens/Ss';


   

function App() {  


	return (
		<BrowserRouter>
			<Nav/>
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route path="/signup" component={Signup}/>
				<Route path="/signin" component={Signin}/>
				<Route path="/shipping" component={Shipping}/>
				<Route path="/payment" component={Payment}/>
				<Route path="/placeorder" component={Placeorder}/>
				<Route path="/all_products" component={Products}/>
				<Route path="/productdetails/:id" component={Productdetails}/>
				<Route path="/cart/:id?" component={Cart}/>
				<Route path="/accounts" component={Account}/>
				<Route path="/addproduct" component={Addproduct}/>
				<Route path="/ss" componebt={Ss}/>
			</Switch>
			<Footer/>
		</BrowserRouter>
  );
}

export default App;