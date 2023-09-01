import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<div className="content">
			<div id="intro">
				<div>
					<h1 style={{ marginBottom: 0 }}> JOSHUA</h1>
					<h1>AMILHASAN</h1>
					<h2 style={{ borderBottom: "solid", borderColor: "black" }}>
						Full-Stack Web Developer
					</h2>

					<ul>
						<li>
							<a href="https://github.com/amilhaj">
								<div className="image-wrapper">
									<Image
										src="/github-mark.png"
										fill={true}
										alt="Github Logo"
									/>
								</div>
							</a>
						</li>

						<li>
							<a href="https://www.linkedin.com/in/joshua-amilhasan/">
								<div className="image-wrapper">
									<Image
										src="/linkedin-mark.png"
										fill={true}
										alt="LinkedIn Logo"
									/>
								</div>
							</a>
						</li>
						<li>
							<a href="mailto: amilhasan.joshua@gmail.com">
								<div className="image-wrapper">
									<Image
										src="/email-mark.png"
										fill={true}
										alt="E-Mail Logo"
									/>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div id="skills">
				<h1>Skills</h1>
				<h2>Full-Stack Web Developer</h2>
			</div>
			<div id="">
				<h1>Ends here</h1>
			</div>
		</div>
	);
}
