import ButtonBlack from "../../../../components/buttons/ButtonBlack";
import styles from "./featured.module.scss";

const Featured: React.FC = () => {
	return (
		<section className={styles.Featured}>
			<div className={styles.header}>
				<span className={styles.headerText}>Featured</span>
				<div className={styles.btnWrapper}>
					<ButtonBlack text="See All" />
				</div>
			</div>

			{/* portfolio container */}
			<div className={styles.portfolioContainer}>
				{/* group1 */}
				<div className={`${styles.group1} ${styles.group}`}>
					<div className={styles.bgGroupModal}></div>
					<div className={styles.groupText}>1</div>
					<div className={styles.groupContainer}>
						<h5 className={styles.groupTitle}>Project Del Sol</h5>
						<p className={styles.groupPara}>View All Projects</p>
					</div>
				</div>
				{/* group2*/}
				<div className={`${styles.group2} ${styles.group}`}>
					<div className={styles.bgGroupModal}></div>
					<div className={styles.groupText}>2</div>
					<div className={styles.groupContainer}>
						<h5 className={styles.groupTitle}>228B Tower</h5>
						<p className={styles.groupPara}>View All Projects</p>
					</div>
				</div>
				{/* group3*/}
				<div className={`${styles.group3} ${styles.group}`}>
					<div className={styles.bgGroupModal}></div>
					<div className={styles.groupText}>3</div>
					<div className={styles.groupContainer}>
						<h5 className={styles.groupTitle}>Le Prototype</h5>
						<p className={styles.groupPara}>View All Projects</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
