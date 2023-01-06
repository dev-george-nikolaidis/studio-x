import styles from "./hero.module.scss";
import { MdEast } from "react-icons/md";
import { useState } from "react";
import ButtonBlack from "../../../../components/buttons/ButtonBlack";

const Hero: React.FC = () => {
	const [currentActive, setCurrentActive] = useState("01");

	let backgroundImage = <div className={`${styles.bgDefault} ${styles.backgroundImage}`}></div>;

	function handlerClick(e: React.MouseEvent<HTMLDivElement>) {
		setCurrentActive(e.currentTarget.textContent ? e.currentTarget.textContent : "01");
	}

	switch (currentActive) {
		case "02":
			backgroundImage = <div className={`${styles.bg02} ${styles.backgroundImage}`}></div>;
			break;
		case "03":
			backgroundImage = <div className={`${styles.bg03} ${styles.backgroundImage}`}></div>;
			break;
		case "04":
			backgroundImage = <div className={`${styles.bg04} ${styles.backgroundImage}`}></div>;
			break;

		default:
			backgroundImage = <div className={`${styles.bgDefault} ${styles.backgroundImage}`}></div>;
			break;
	}
	return (
		<div className={styles.hero}>
			{backgroundImage}
			{/* hero */}
			<div className={styles.textContainer}>
				<div className={styles.bgModal}></div>
				<h2 className={styles.heroTitle}>Project Paramour</h2>
				<p className={styles.heroText}>Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.</p>
				<div className={styles.btnWrapper}>
					<ButtonBlack text="See Our Portfolio" />
				</div>
			</div>
			{/* hero buttons */}
			<div className={styles.heroButtonsContainer}>
				<span onClick={handlerClick} className={currentActive === "01" ? `${styles.btnHeroGeneral} ${styles.btnActive}` : `${styles.btnHeroGeneral}`}>
					01
				</span>
				<span onClick={handlerClick} className={currentActive === "02" ? `${styles.btnHeroGeneral} ${styles.btnActive}` : `${styles.btnHeroGeneral}`}>
					02
				</span>
				<span onClick={handlerClick} className={currentActive === "03" ? `${styles.btnHeroGeneral} ${styles.btnActive}` : `${styles.btnHeroGeneral}`}>
					03
				</span>
				<span onClick={handlerClick} className={currentActive === "04" ? `${styles.btnHeroGeneral} ${styles.btnActive}` : `${styles.btnHeroGeneral}`}>
					04
				</span>
			</div>
		</div>
	);
};

export default Hero;
