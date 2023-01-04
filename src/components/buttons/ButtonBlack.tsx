import { MdEast } from "react-icons/md";
import styles from "./buttonBlack.module.scss";

interface Props {
	text: string;
	style?: string;
}

const ButtonBlack: React.FC<Props> = ({ text, style }) => {
	return (
		<button className={`${styles.btnHero} btn ${styles.style}`}>
			<span className={styles.btnText}>{text}</span>
			<MdEast className={styles.btnIcon} />
		</button>
	);
};

export default ButtonBlack;
