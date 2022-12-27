import styles from "./features.module.scss";
import Easy_img from "../../../../assets/home/desktop/illustration-easy-to-implement.svg";
import Simple_img from "../../../../assets/home/desktop/illustration-simple-ui.svg";
import Finances_img from "../../../../assets/home/desktop/icon-personal-finances.svg";
import Banking_img from "../../../../assets/home/desktop/icon-banking-and-coverage.svg";
import Card_img from "../../../../assets/home/desktop/icon-consumer-payments.svg";
import Newsletter from "../../../../components/Newsletter";

const Features: React.FC = () => {
	return (
		<section className={styles.easy_use}>
			<div className={styles.easy_container}>
				<div className={styles.img_wrapper}>
					<img src={Easy_img} alt="" className={styles.easy_img} />
				</div>
				<div className={styles.text_wrapper}>
					<h5 className={styles.easy_title}>Easy to implement</h5>
					<p className={styles.easy_text}>
						Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.
					</p>
				</div>
			</div>

			<div className={styles.simple_container}>
				<div className={styles.bg_feature_image}></div>
				<div className={styles.simple_context}>
					<h5 className={styles.simple_title}>Simple UI & UX</h5>
					<p className={styles.simple_text}>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion. </p>
				</div>
				<div className={styles.simple_image}>
					<img src={Simple_img} alt="" className={styles.image_simple} />
				</div>
			</div>

			<div className={styles.features_container}>
				<div className={styles.single_features_container}>
					<img src={Finances_img} alt="" className={styles.img_feature_single} />
					<h5 className={styles.single_feature_title}>Personal Finances</h5>
					<p className={styles.single_feature_text}>
						Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account.{" "}
					</p>
				</div>
				<div className={styles.single_features_container}>
					<img src={Banking_img} alt="" className={styles.img_feature_single} />
					<h5 className={styles.single_feature_title}>Banking & Coverage</h5>
					<p className={styles.single_feature_text}>
						With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.{" "}
					</p>
				</div>
				<div className={styles.single_features_container}>
					<img src={Card_img} alt="" className={styles.img_feature_single} />
					<h5 className={styles.single_feature_title}>Consumer Payments</h5>
					<p className={styles.single_feature_text}>
						It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.{" "}
					</p>
				</div>
			</div>
			<Newsletter />
		</section>
	);
};

export default Features;
