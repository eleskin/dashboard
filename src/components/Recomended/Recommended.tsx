import styles from './Recommended.module.css';
import Service from '../Service/Service';
import Title from '../Title/Title';

const Recommended: Function = (): JSX.Element => {
	return (
		<div className={styles.Recommended}>
			<Title value="Recommended"/>
			<div className={styles.Recommended__services}>
				<Service tag="UX usability" title="10 Criteria for Explosive Sales Growth"/>
				<Service tag="UX usability" title="10 Criteria for Explosive Sales Growth"/>
			</div>
		</div>
	);
};

export default Recommended;
