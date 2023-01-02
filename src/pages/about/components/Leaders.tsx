import { LeadersData } from "../../../data/data";
import styles from "./leaders.module.scss";
import SingleLeaderCard from "./SingleLeaderCard";

interface Props {}

interface LeadersProps {
	name: string;
	position: string;
	imgName: string;
}
const Leaders: React.FC<Props> = ({}) => {
	let displayLeaders = LeadersData.map((leader: LeadersProps, index: number) => {
		const { name, position, imgName } = leader;
		return <SingleLeaderCard name={name} imgName={imgName} position={position} key={index} />;
	});

	return (
		<section className={styles.leaders}>
			<div className={styles.titleContainer}>
				<h2 className={styles.leaderTitle}>The Leaders</h2>
			</div>
			<div className={styles.photosContainer}>{displayLeaders}</div>
		</section>
	);
};

export default Leaders;
