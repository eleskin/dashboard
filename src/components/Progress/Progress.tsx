import styles from './Progress.module.css';

const Progress: Function = ({value}: { value: number }): JSX.Element => {
	return (
		<div className={styles.Progress}>
			<span className={styles.Progress__title}>{value}%</span>
			<div className={styles.Progress__bar}>
				<div style={{width: `${value}%`}}><span/></div>
			</div>
		</div>
	);
};

export default Progress;
