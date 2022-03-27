import styles from './Home.module.css';
import Metrics from '../../components/Metrics/Metrics';
import Recommended from '../../components/Recomended/Recommended';
import Statistic from '../../components/Statistic/Statistic';

const Home: Function = (): JSX.Element => {
	return (
		<div className={styles.Home}>
			<Metrics/>
			<Statistic/>
			<Recommended/>
		</div>
	);
};

export default Home;
