import styles from "./heritage.module.scss";

interface Props {}

const Heritage: React.FC<Props> = ({}) => {
	return (
		<div className={styles.heritage}>
			<div className={styles.line}></div>
			<div className={styles.textContainer}>
				<h4 className={styles.title}>Our Heritage</h4>
				<p className={styles.paragraph1}>
					Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms
					in the country.
				</p>
				<p className={styles.paragraph2}>
					Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every
					surrounding element to inform our designs.
				</p>
				<p className={styles.paragraph3}>Our small team of world-class professionals provides input on every project.</p>
			</div>
			<div className={styles.imgContainer}></div>
		</div>
	);
};

export default Heritage;
