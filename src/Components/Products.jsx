import React,{useState} from "react";
import data from "../data.json";
import {Link,Route} from 'react-router-dom';

const Style = {
	color:"white",
	textDecoration: "none",
	lineHeight:4,
	fontFamily:"Arial",
	fontSize:18,
}

const Products = ({match}) => {
	const [obj,setObj] = useState({});
	return(
		<div>
			<h1>Products</h1>
			<ul className="subList">
				{data["products"].map(element =>
					<li>
						<Link style={Style} to={`${match.url}/${element.id}`} onClick={e=>{
							setObj(element);
						}}>{element.name}</Link>
					</li>
				)}
			</ul>
			<Route path={`${match.path}/:id`} 
			render={({match})=>
				<div>
					<h1>{obj.name}</h1>
					<h1>{obj.status}</h1>
					<img src={obj.img}/>
				</div>
			}/>
			<Route exact={true} path={match.url} render={()=>
				<div>
					<h1>Please Select A Product ! </h1>
				</div>
			}/>
		</div>
	)

}

export default Products;