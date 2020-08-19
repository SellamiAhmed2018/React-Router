import React,{useState} from 'react';
import data from "../data.json";
import {Link,Route} from 'react-router-dom';

const Style = {
	color:"white",
	textDecoration: "none",
	lineHeight:4,
	fontFamily:"Arial",
	fontSize:18,
}

const Category = ({match}) => {
	const [currentImage,setCurrentIamge] = useState("");

	return(
		<div>
			<ul className="subList">
				{data["category"].map(element =>
					<li>
					<Link style={Style} to={`${match.url}/${element.name}`} onClick={e=>{setCurrentIamge(element.img)}}>{element.name}</Link>
					</li>
				)}
			</ul>
			<Route path={`${match.path}/:name`} render={({match})=>{
				return(
					<React.Fragment>
						<h1>{match.params.name}</h1>
						<img src={currentImage} alt=""/>
					</React.Fragment>
				)
			}}/>
		</div>
    )
}

export default Category;