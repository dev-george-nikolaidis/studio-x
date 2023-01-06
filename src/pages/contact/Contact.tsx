import { MdEast } from "react-icons/md";
import Footer from "../../components/layout/Footer";
import Label from "../../components/layout/Label";
import Navigation from "../../components/layout/Navigation";
import Form from "./components/Form";
import styles from "./contact.module.scss";

interface Props {}

const Contact: React.FC<Props> = ({}) => {
	return (
		<section className={styles.contact}>
			<div className={styles.labelWrapper}>
				<Label page="Contact" />
			</div>
			<Navigation />
			{/*  */}
			<div className={styles.aboutHero}>
				<h4 className={styles.heroTitle}>Contact</h4>
				<div className={styles.imageContainer}>
					<div className={styles.bgModal}></div>
					<div className={styles.bgImg}></div>
					<div className={styles.shape}></div>
				</div>

				<div className={styles.textContainer}>
					<div className={styles.subContainer}>
						<div className={styles.line}></div>
						<h4 className={styles.aboutTitle}>Tell us about your project</h4>
						<p className={styles.aboutHeroText}>
							We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself
							nearby, come say hello!
						</p>
					</div>
				</div>
			</div>
			{/*  */}
			<div className={styles.addressesContainer}>
				<div className={styles.group1}>
					<div className={styles.lineGroup1}></div>
					<h4 className={styles.group1Title}>Contact Details</h4>
				</div>
				{/*  */}
				<div className={styles.group2}>
					<h4 className={styles.headline}>Main Office</h4>
					<div className={styles.addressControlGroup}>
						<span>Mail : </span>
						<span>archone@mail.com </span>
					</div>
					<div className={styles.addressControlGroup}>
						<span>Address :</span>
						<span> 1892 Chenoweth Drive TN</span>
					</div>
					<div className={styles.addressControlGroup}>
						<span>Phone :</span>
						<span> 123-456-3451</span>
					</div>
					<div className={styles.viewMapContainer}>
						<p>View on Map</p>
						<MdEast className={styles.btnIcon} />
					</div>
				</div>
				<div className={styles.group3}>
					<h4 className={styles.headline}>Office II</h4>
					<div className={styles.addressControlGroup}>
						<span>Mail : </span>
						<span> archone@mail.com </span>
					</div>
					<div className={styles.addressControlGroup}>
						<span>Address :</span>
						<span> 3399 Wines Lane TX</span>
					</div>
					<div className={styles.addressControlGroup}>
						<span>Phone :</span>
						<span> 832-123-4321</span>
					</div>
					<div className={styles.viewMapContainer}>
						<p>View on Map</p>
						<MdEast className={styles.btnIcon} />
					</div>
				</div>
				{/*  */}
			</div>
			<div className={styles.mapContainer}>
				<div className={styles.bgMap}></div>
			</div>
			<Form />
			<Footer />
		</section>
	);
};

export default Contact;
