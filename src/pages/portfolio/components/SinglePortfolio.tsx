import styles from "./singlePortfolio.module.scss";
import Test from "../../../assets/portfolio/desktop/image-228b.jpg";

interface Props {
	title: string;
	time: string;
	imgName: string;
}

const SinglePortfolio: React.FC<Props> = ({ time, title, imgName }) => {
	const large_image = require(`../../../assets/portfolio/desktop/${imgName}`);
	const small_image = require(`../../../assets/portfolio/desktop/${imgName}`);
	return (
		<div className={styles.singleContainer}>
			<div className={styles.mask}></div>
			<img srcSet={`${large_image} 760w , ${small_image} 600w `} className={styles.cardImage} />
			<div className={styles.textContainer}>
				<h4 className={styles.title}>{title}</h4>
				<p className={styles.textTime}>{time}</p>
			</div>
		</div>
	);
};

export default SinglePortfolio;
