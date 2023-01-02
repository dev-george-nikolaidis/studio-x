import styles from "./singleLeaderCard.module.scss";

interface Props {
	name: string;
	position: string;
	imgName: string;
}

const SingleLeaderCard: React.FC<Props> = ({ name, position, imgName }) => {
	const large_image = require(`../../../assets/about/desktop/${imgName}`);
	const small_image = require(`../../../assets/about/desktop/${imgName}`);

	return (
		<div className={styles.singleLeader}>
			<img srcSet={`${large_image} 760w , ${small_image} 600w `} className={styles.cardImage} />
			<p className={styles.name}>{name}</p>
			<p className={styles.position}>{position}</p>
		</div>
	);
};

export default SingleLeaderCard;
