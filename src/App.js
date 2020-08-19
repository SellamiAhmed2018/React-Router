import React,{useState} from 'react';
import './App.css';
import Nav from "./Components/Nav.jsx";
import Home from "./Components/Home.jsx";
import Category from "./Components/Category.jsx";
import Products from "./Components/Products.jsx";
import Login from "./Components/Login.jsx";
import Admin from "./Components/Admin.jsx";

import {Switch,Route} from "react-router-dom";

const App = () => {
	const [redirect,setRedirect] = useState(false);

	return(
		<div>
			<Nav redirect={redirect}/>
			<Switch>
				<Route path="/" exact={true} component={Home}/>
				<Route path="/category" component={Category}/>
				<Route path="/products" component={Products}/>
				<Route path="/login" component={()=><Login redirect={redirect} setRedirect={setRedirect}/>}/>
				<Route path="/admin" component={Admin}/>
			</Switch>
		</div>
	)
}

export default App;