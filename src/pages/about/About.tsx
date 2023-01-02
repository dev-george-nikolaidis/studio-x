import Footer from "../../components/layout/Footer";
import Label from "../../components/layout/Label";
import Navigation from "../../components/layout/Navigation";
import styles from "./about.module.scss";
import Heritage from "./components/Heritage";
import Leaders from "./components/Leaders";

interface Props {}

const About: React.FC<Props> = ({}) => {
	return (
		<section className={styles.about}>
			<div className={styles.labelWrapper}>
				<Label page="About Us" />
			</div>
			<Navigation />
			<div className={styles.aboutHero}>
				<h4 className={styles.heroTitle}>About</h4>
				<div className={styles.imageContainer}>
					<div className={styles.bgModal}></div>
					<div className={styles.bgImg}></div>
					<div className={styles.shape}></div>
				</div>

				<div className={styles.textContainer}>
					<div className={styles.subContainer}>
						<div className={styles.line}></div>
						<h4 className={styles.aboutTitle}>Your team of professionals</h4>
						<p className={styles.aboutHeroText}>
							Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the
							relationship our projects have with their surroundings.
						</p>
					</div>
				</div>
			</div>
			<Heritage />
			<Leaders />
			<Footer />
		</section>
	);
};

export default About;
