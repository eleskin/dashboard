import styles from './Metrics.module.css';

import Metric from '../Metric/Metric';
import Select from '../Select/Select';
import Title from '../Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

const Metrics: Function = (): JSX.Element => {
	return (
		<div className={styles.Metrics}>
			<Title value="Recommended">
				<Select options={['Today', 'Last week', 'Last month']}/>
			</Title>
			<div className={styles.Metrics__grid}>
				<Metric title="USERS" value="12500" changing={12}/>
				<Metric title="CALLS" value="150" changing={-12}/>
				<Metric title="SALES" value="$7.484" changing={12}/>
				<button className={styles.Metrics__add}>
					<i><FontAwesomeIcon icon={faPlus}/></i>
					<span>New<br/>Metric</span>
				</button>
			</div>
		</div>
	);
};

export default Metrics;
