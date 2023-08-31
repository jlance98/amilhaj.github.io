import React from "react";

const project_card = ({ image, title, description }) => {
	return (
		<div className="card m-2 mb-4">
			<img className="card-img-top" src={image} alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href="#" className="btn btn-primary me-2">
					GitHub
				</a>
				<a href="#" className="btn btn-primary">
					Demo
				</a>
			</div>
		</div>
	);
};

export default project_card;
