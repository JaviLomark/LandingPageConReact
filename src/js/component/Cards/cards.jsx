import React from "react";
import "./cards.css"

const Cards = (props) => {
	return (
        <div className="card myCard">
  			<img src={props.img} className="card-img-top" alt="..."/>
  			<div className="card-body">
    			<h5 className="card-title text-center">{props.title}</h5>
    			<p className="card-text text-center">{props.description}</p>
    			<a href="#" className="btn btn-primary d-grid">Button</a>
			</div>
		</div>
	);
};

export default Cards;