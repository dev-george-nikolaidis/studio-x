import Footer from "../../components/layout/Footer";
import Navigation from "../../components/layout/Navigation";
import AboutSection from "./components/aboutSection/AboutSection";
import Featured from "./components/featured/Featured";
import Hero from "./components/hero/Hero";
import Welcome from "./components/welcome/Welcome";
import styles from "./home.module.scss";

const Home: React.FC = () => {
	return (
		<section className={styles.home}>
			<Navigation />
			<Hero />
			<Welcome />
			<AboutSection />
			<Featured />
			<Footer />
		</section>
	);
};

export default Home;
