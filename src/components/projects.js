import React from "react";
import "./component.css";
import ProjectCard from "../components/project-card";

const projects = () => {
	return (
		<div className="row">
			<div className="col-sm-12">
				<ProjectCard
					image="/about-card-img.png"
					title="Project Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
				/>
			</div>
			<div className="col">
				<ProjectCard
					image="/about-card-img.png"
					title="Project Title "
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
				/>
			</div>
			<div className="col">
				<ProjectCard
					image="/about-card-img.png"
					title="Project Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
				/>
			</div>
			<div className="col">
				<ProjectCard
					image="/about-card-img.png"
					title="Project Title"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua."
				/>
			</div>
		</div>
	);
};

export default projects;
