import React from "react";
import "./component.css";

const about_card = () => {
	return (
		<div className="card m-2 mb-4">
			<img
				className="card-img-top"
				src="/about-card-img.png"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Hello, I'm Joshua Amilhasan</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia
					deserunt mollit anim id est laborum.
				</p>
				<h5>Tech Stack</h5>
			</div>
		</div>
	);
};

export default about_card;
