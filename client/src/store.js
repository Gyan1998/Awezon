import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {productListReducer,productDetailsReducer} from './reducers/productreducers';
import {cartReducer} from './reducers/cartreducers';
import {userSigninReducer,userSignupReducer,userLogoutReducer} from './reducers/userreducers';
import {productSaveReducer,productDeleteReducer} from './reducers/productreducers';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';


const cartItems=Cookie.getJSON("cartItems")||[];
const userInfo=Cookie.getJSON("userInfo")||null;

const initialstate={cart:{cartItems,shipping:{},payment:{}},userSignin:{userInfo}};

const reducer=combineReducers({
	productList:productListReducer,
	productDetails:productDetailsReducer,
	cart:cartReducer,
	userSignin:userSigninReducer,
	userSignup:userSignupReducer,
	userLogout:userLogoutReducer,
	productSave:productSaveReducer,
	productDelete:productDeleteReducer,	
})

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
const store=createStore(reducer,initialstate,composeEnhancer(applyMiddleware(thunk)));

export default store;