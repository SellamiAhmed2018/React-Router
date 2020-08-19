import React from 'react';
import {Link} from "react-router-dom";

const Style = {
	color:"white",
	textDecoration: "none"
}

const Nav = ({redirect}) => {
	return(
		<div>
			<ul className="bigList">
				<Link to="/" style={Style}>
					<li>Home</li>
				</Link>
				<Link to="/category" style={Style}>
					<li>Category</li>
				</Link>
				<Link to="/products" style={Style}>
					<li>Products</li>
				</Link>
				{!(redirect)?
				(<Link to="/login" style={Style}>
					<li>Admin Area</li>
				</Link>):(
				<Link to="/admin" style={Style}>
					<li>Admin Area</li>
				</Link>
				)
				}
			</ul>
		</div>
	)
}

export default Nav;