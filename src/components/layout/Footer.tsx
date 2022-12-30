import { NavLink } from "react-router-dom";
import ButtonBlack from "../buttons/ButtonBlack";
import Logo from "../icons/Logo";
import styles from "./footer.module.scss";

interface Props {}

const Footer: React.FC<Props> = ({}) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.ftWrapper}>
				<div className={styles.footerContainer}>
					<div className={styles.logoWrapper}>
						<Logo color="#fff" />
					</div>
				</div>
				{/* links */}
				<div className={styles.link_container}>
					<li>
						<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
							Pricing
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
							About Us
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
							Contact
						</NavLink>
					</li>
				</div>
				{/*button  */}
				<div className={styles.btnWrapper}>
					<ButtonBlack text="See Our Portfolio" />
				</div>
			</div>
			<div className={styles.shadow}></div>
		</footer>
	);
};

export default Footer;
