import { MdEast } from "react-icons/md";
import styles from "./buttonBlack.module.scss";

interface Props {
	text: string;
}

const ButtonBlack: React.FC<Props> = ({ text }) => {
	return (
		<button className={`${styles.btnHero} btn`}>
			<span className={styles.btnText}>{text}</span>
			<MdEast className={styles.btnIcon} />
		</button>
	);
};

export default ButtonBlack;
