import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import Logo from "../assets/shared/desktop/logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import HambIcon from "../assets/shared/mobile/menu.svg";

const Navigation: React.FC = () => {
	const [displayMenu, setDisplayMenu] = useState(false);

	return (
		<nav className={styles.navigation}>
			<div className={styles.logo_wrapper}>
				<NavLink to="/" end>
					<img src={Logo} alt="" className={styles.logo} />
				</NavLink>
			</div>
			<div className={styles.link_container}>
				<li>
					<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Pricing
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Contact
					</NavLink>
				</li>
			</div>
			<button className={`${styles.btn_cta} btn`}>Schedule a Demo</button>
			{/* <img src={HambIcon} alt="" className={styles.hamburger_menu} onClick={() => setDisplayMenu(!displayMenu)} /> */}
			<div className={styles.hamburger_menu} onClick={() => setDisplayMenu(!displayMenu)}>
				{!displayMenu ? (
					<>
						<div className={styles.line_1}></div>
						<div className={styles.line_2}></div>
					</>
				) : (
					<MdClose className={styles.close_icon} />
				)}
			</div>

			{displayMenu ? (
				<>
					<div className={styles.menu_modal}>
						<ul className={styles.list_modal}>
							<li>
								<NavLink to="/pricing" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
									Pricing
								</NavLink>
							</li>
							<li>
								<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
									About
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${styles.active}    ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
									Contact
								</NavLink>
							</li>
						</ul>

						<div className={styles.modal_line}></div>
					</div>
				</>
			) : null}
		</nav>
	);
};

export default Navigation;
