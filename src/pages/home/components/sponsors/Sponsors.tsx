import styles from "./sponsors.module.scss";
import Tesla_icon from "../../../../assets/shared/desktop/tesla.svg";
import Tesla from "../../../../components/icons/Tesla";
import Microsoft from "../../../../components/icons/Microsoft";
import Hp from "../../../../components/icons/Hp";
import Oracle from "../../../../components/icons/Oracle";
import Google from "../../../../components/icons/Google";
import Nvidia from "../../../../components/icons/Nvidia";

const Sponsors: React.FC = () => {
	return (
		<section className={styles.sponsors}>
			<div className={styles.bg_sponsors}></div>
			<div className={styles.wrapper}>
				<div className={styles.text_container}>
					<h4 className={styles.sponsors_title}> Who we work with</h4>
					<p className={styles.text_pitch}>
						Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to
						create easy and accessible experiences for their users.{" "}
					</p>
					<button className={`${styles.btn_about_us} btn`}>About Us</button>
				</div>
				<div className={styles.logos_container}>
					<Tesla fill="#fff" />
					<Microsoft fill="#fff" />
					<Hp fill="#fff" />
					<Oracle fill="#fff" />
					<Google fill="#fff" />
					<Nvidia fill="#fff" />
				</div>
			</div>
		</section>
	);
};

export default Sponsors;
