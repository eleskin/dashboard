import styles from './Main.module.css';

import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const Main: Function = (): JSX.Element => {
	return (
		<main className={styles.Main}>
			<Header/>
			<div className={styles.Main__grid}>
				<div>
				
				</div>
				<Profile/>
			</div>
		</main>
	);
};

export default Main;
