import React from "react";
import {Redirect} from "react-router-dom";

const Login = ({redirect,setRedirect}) => {
	
	return(
		<div>
			<h1>You must log in to view the page at /admin</h1>
			<button onClick={e=>{
				setRedirect(true);
			}}
			style={{
				fontSize:20,
				fontFamily:"Arial",
				backgroundColor:"rgb(103,216,239)"
			}}>Log in</button>
			{redirect&&
			<Redirect to="/admin"/>
			}
		</div>
	)
}

export default Login;