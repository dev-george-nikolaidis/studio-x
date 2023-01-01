import styles from "./label.module.scss";

interface Props {
	page: string;
}

const Label: React.FC<Props> = ({ page }) => {
	return (
		<div className={styles.labelContainer}>
			<div className={styles.line}> </div>
			<div className={styles.pageText}> {page}</div>
		</div>
	);
};

export default Label;
