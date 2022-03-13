import styles from './Main.module.css';

import Header from '../Header/Header';

const Main: Function = (): JSX.Element => {
	return (
		<main className={styles.Main}>
			<Header/>
		</main>
	);
};

export default Main;
