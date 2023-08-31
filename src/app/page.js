import Styles from "./page.module.css";
import AboutCard from "../components/about-card";
import Projects from "../components/projects";

export default function Home() {
	return (
		<div className="container">
			<AboutCard />
			<h1>Projects</h1>
			<Projects />
		</div>
	);
}
