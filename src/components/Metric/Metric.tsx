import styles from './Metric.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';

const Metric: Function = ({
	                          title,
	                          value,
	                          changing,
                          }: { title: string, value: string, changing: number }): JSX.Element => {
	return (
		<Card>
			<div className={`${styles.Metric} ${changing <= 0 ? styles.Metric__negative : ''}`}>
				<span className={styles.Metric__title}>{title}</span>
				<strong className={styles.Metric__value}>{value}</strong>
				<em className={styles.Metric__changing}>
					<span>{changing <= 0 ? changing.toString().slice(1) : changing}%</span>
					{changing <= 0 ? <FontAwesomeIcon icon={faArrowDown}/> : <FontAwesomeIcon icon={faArrowUp}/>}
				</em>
			</div>
		</Card>
	);
};

export default Metric;
