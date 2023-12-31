import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
	return (
		<div className="content">
			<div className="intro" id="intro">
				<div>
					<h1 style={{ marginBottom: 0 }}> JOSHUA</h1>
					<h1>AMILHASAN</h1>
					<h2
						style={{
							borderBottom: "solid",
							borderColor: "rgb(51,51,51)",
						}}
					>
						Full-Stack Developer
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
			<div className="skills" id="skills">
				<div>
					<h1>Skills</h1>
					<ul className="skill-categories">
						<div>
							<li className="category">
								<h2
									style={{
										borderLeft: "solid",
										borderColor: "rgb(51,51,51)",
										paddingLeft: "1rem",
									}}
								>
									Front-End
								</h2>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>React.js</li>
									<li>Next.js</li>
									<li>Bootstrap</li>
								</ul>
							</li>
						</div>
						<div>
							<li className="category">
								<h2
									style={{
										borderLeft: "solid",
										borderColor: "rgb(51,51,51)",
										paddingLeft: "1rem",
									}}
								>
									Back-End
								</h2>
								<ul>
									<li>C# + ASP.NET</li>
									<li>Java</li>
									<li>Python</li>
									<li>SQL</li>
									<li>MongoDB</li>
									<li>RESTful APIs</li>
								</ul>
							</li>
						</div>
						<div>
							<li className="category">
								<h2
									style={{
										borderLeft: "solid",
										borderColor: "rgb(51,51,51)",
										paddingLeft: "1rem",
									}}
								>
									Tools
								</h2>
								<ul>
									<li>Git</li>
									<li>Docker</li>
									<li>GitHub Actions</li>
									<li>Maven</li>
									<li>Visual Studio & VS Code</li>
									<li>Jira</li>
								</ul>
							</li>
						</div>
					</ul>
				</div>
			</div>
			<div className="projects" id="projects">
				<div>
					<h1>Projects</h1>
					<ul>
						<li>
							<h2>Recipe Sharing Web Platform</h2>
							<ul>
								<li>C#</li>
								<li>ASP.NET</li>
								<li>REST API</li>
								<li>React.js</li>
								<li>Microsoft SQL Server</li>
							</ul>
							<p>
								A full-stack web application project for
								browsing and sharing recipes with others.
							</p>
						</li>
						<li>
							<h2>Remote Desktop Android Application</h2>
							<ul>
								<li>Java</li>
								<li>Kotlin</li>
								<li>Task Automation</li>
							</ul>
							<p>
								An Android application that automatically
								launches desktop applications and scripts
								remotely.
							</p>
						</li>
						<li>
							<h2>Personal Voice Assistant</h2>
							<ul>
								<li>Python</li>
								<li>Speech Recognition</li>
								<li>Task Automation</li>
							</ul>
							<p>
								A personal voice activated assistant that
								automates launching desktop programs.
							</p>
						</li>
						<li>
							<h2>Discord Bot</h2>
							<ul>
								<li>Python</li>
								<li>MongoDB</li>
								<li>REST API</li>
								<li>Command Line Interface</li>
							</ul>
							<p>
								A personal Discord bot that communicates with
								the Mangadex API and leverages MongoDB to track
								comic reading progress and automatically check
								for chapter updates.
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="footer">
				<footer class="py-3">
					<ul class="nav justify-content-center pb-3 mb-3">
						<li class="nav-item">
							<a href="#intro" class="nav-link px-2 text-muted">
								Home
							</a>
						</li>
						<li class="nav-item">
							<a href="#skills" class="nav-link px-2 text-muted">
								Skills
							</a>
						</li>
						<li class="nav-item">
							<a
								href="#projects"
								class="nav-link px-2 text-muted"
							>
								Projects
							</a>
						</li>
					</ul>
					<p class="text-center text-muted">
						&copy; 2023 Joshua Amilhasan
					</p>
				</footer>
			</div>
		</div>
	);
}
