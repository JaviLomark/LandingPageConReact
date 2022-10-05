import React from "react";
import "./jumbotron.css"

const Jumbotron = () => {
	return (
        <div className="p-5 mb-4 mt-4 bg-light rounded-3 myJumbotron ">
  		<div className="container-fluid py-5">
    	<h1 className="display-5 fw-bold">A Warm Welcome</h1>
    	<p className="col-md-8 fs-4">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   		 <a href="#" className="btn btn-primary btn-lg">Call to Action!</a>
  		</div>
		</div>
	);
};

export default Jumbotron;