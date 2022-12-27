import styles from "./hero.module.scss";
import Phone_img from "../../../../assets/home/desktop/illustration-phone-mockup.svg";

const Hero: React.FC = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.text_context}>
				<div className={styles.text_container}>
					<h2 className={styles.hero_title}>Start building with our APIs for absolutely free.</h2>
					<div className={styles.input_container}>
						<input type="email" className={styles.input_email} placeholder="Enter email address" />
						<button className={`${styles.btn_cta_email}  btn`}>Schedule a Demo</button>
					</div>
					<p className={styles.question_text}>
						Have any questions? <span className={styles.contact_text}>Contact Us</span>
					</p>
				</div>
			</div>
			<div className={styles.image_wrapper}>{<img src={Phone_img} alt="" className={styles.hero_image} />}</div>
		</section>
	);
};

export default Hero;
