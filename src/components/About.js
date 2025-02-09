import { Link } from 'react-router-dom';
import Title from './Title';
import profilePicture from '../assets/images/rajvi.jpg';

const About = ({ showMore = false }) => {
	return (
		<section className="section about-main">
			<div className="section-center about-center">
				<article className="about-img" data-border="yes">
					<img
						className="hero-photo"
						src={profilePicture}
						alt="rajvi patel profile"
					/>
				</article>
				<article className="about-info">
					<Title title="about" className="about-title" />
					<p>
					Hey there! I’m a software engineer who loves crafting software that not only works but also wows. Whether it’s building sleek, pixel-perfect frontends or architecting rock-solid backends, I’m all about blending functionality with elegance.
					</p>
					<p>
I’ve had my hands on a bunch of cool tech like Java, Python, React.js, Vue.js, TypeScript, Django, and Flask. I’ve worked on everything from optimizing database queries and building RESTful APIs to adding token-based authentication for secure app integrations. Oh, and I’m also an Elastic certified engineer with a Bronze Contributor badge to flex 🏅.

Currently, I’m diving deeper into the world of Computer Science as a Master’s student at Arizona State University. I thrive on solving tough problems, automating boring tasks, and learning new things along the way. When I’m not coding, I’m probably doodling colonies on Mars.
					</p>
					{showMore && (
						<Link className="btn" to="/about/">
							learn more
						</Link>
					)}
				</article>
			</div>
		</section>
	);
};

export default About;
