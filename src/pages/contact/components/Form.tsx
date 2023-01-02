import { MdEast } from "react-icons/md";
import styles from "./form.module.scss";

interface Props {}

const Form: React.FC<Props> = ({}) => {
	return (
		<div className={styles.formSection}>
			<div className={styles.formTitleContainer}>
				<h2 className={styles.formTitle}>Connect with us</h2>
			</div>
			<div className={styles.formContainer}>
				<div className={styles.formGroup}>
					<input type="text" placeholder="Name" className={styles.input} />
				</div>
				<div className={styles.formGroup}>
					<input type="email" placeholder="Email" className={styles.input} />
				</div>
				<textarea className={styles.textarea} placeholder="Message" />
				<div className={styles.btnWrapper}>
					<MdEast className={styles.btnIcon} />
				</div>
			</div>
		</div>
	);
};

export default Form;
