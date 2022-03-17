import styles from './Title.module.css';

import Headline from '../Headline/Headline';

const Title: Function = ({value, children}: { value: string, children?: JSX.Element }): JSX.Element => {
	return (
		<div className={styles.Title}>
			<div className={styles.Title__container}>
				<h2 className={styles.Title__value}>{value}</h2>
				{children}
			</div>
			<Headline/>
		</div>
	);
};

export default Title;
