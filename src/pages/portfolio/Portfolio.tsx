import Footer from "../../components/layout/Footer";
import Label from "../../components/layout/Label";
import Navigation from "../../components/layout/Navigation";
import { galleryPortfolio } from "../../data/data";
import SinglePortfolio from "./components/SinglePortfolio";
import styles from "./portfolio.module.scss";

interface Props {}

interface Portfolio {
	title: string;
	time: string;
	imgName: string;
}

const Portfolio: React.FC<Props> = ({}) => {
	let displayPortfolio = galleryPortfolio.map((port: Portfolio, index: number) => {
		return <SinglePortfolio key={index} imgName={port.imgName} time={port.time} title={port.title}></SinglePortfolio>;
	});
	return (
		<section className={styles.portfolio}>
			<div className={styles.labelWrapper}>
				<Label page="Portfolio" />
			</div>
			<Navigation />
			<div className={styles.portfolioContainer}>{displayPortfolio}</div>
			<Footer />
		</section>
	);
};

export default Portfolio;
