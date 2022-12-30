import styles from "./welcome.module.scss";

const Welcome: React.FC = () => {
	return (
		<section className={styles.wlcSection}>
			<h2 className={styles.wlcTitleOverlay}>Welcome </h2>
			<div className={styles.textContainer}>
				<h2 className={styles.wlcTitle}>Welcome to Arch Studio</h2>
				<p className={`${styles.wlcText1} ${styles.wlcText}`}>
					We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong
					position to deliver exceptional results.
				</p>
				<p className={`${styles.wlcText2} ${styles.wlcText}`}>
					Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
				</p>
				<p className={`${styles.wlcText3} ${styles.wlcText}`}>
					We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning
					projects that will stand the test of time.
				</p>
			</div>
			<div className={styles.wlcBgImage}></div>
		</section>
	);
};

export default Welcome;
