import { MdEast } from "react-icons/md";
import ButtonBlack from "../../../../components/buttons/ButtonBlack";
import styles from "./aboutSection.module.scss";

const AboutSection: React.FC = () => {
	return (
		<section className={styles.homeAbout}>
			<div className={styles.homeAboutBgImage}></div>
			<div className={styles.bgDarkModal}></div>
			<div className={styles.textContainer}>
				<h2 className={styles.homeAboutTitle}>Small team, big ideas</h2>
				<div className={styles.btnWrapper}>
					<ButtonBlack text="About Us" />
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
