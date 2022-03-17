import styles from './Main.module.css';

import {Dispatch, SetStateAction} from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Metrics from '../Metrics/Metrics';
import Recommended from '../Recomended/Recommended';

const Main: Function = ({setIsHovering}: {setIsHovering: Dispatch<SetStateAction<boolean>>}): JSX.Element => {
	return (
		<main className={styles.Main}>
			<Header setIsHovering={setIsHovering}/>
			<div className={styles.Main__grid}>
				<div className={styles.Main__elements}>
					<Metrics/>
					<Recommended/>
				</div>
				<Profile/>
			</div>
		</main>
	);
};

export default Main;
