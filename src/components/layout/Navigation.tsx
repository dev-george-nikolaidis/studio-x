import { NavLink } from "react-router-dom";
import styles from "./navigation.module.scss";
import Logo from "../../assets/logo.svg";
import { FaAlignJustify } from "react-icons/fa";
import { useState } from "react";
import { MdClose } from "react-icons/md";

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
					<NavLink to="/portfolio" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
						Portfolio
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
								<NavLink to="/portfolio" end className={({ isActive }) => (isActive ? ` ${styles.active}  ${styles.link}` : `${styles.inactive}  ${styles.link}`)}>
									Portfolio
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
						</ul>

						{/* <div className={styles.modal_line}></div> */}
					</div>
				</>
			) : null}
		</nav>
	);
};

export default Navigation;
