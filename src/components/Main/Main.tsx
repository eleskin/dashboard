import styles from './Main.module.css';
import {Dispatch, SetStateAction, useState} from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Metrics from '../Metrics/Metrics';
import Recommended from '../Recomended/Recommended';
import Statistic from '../Statistic/Statistic';

const Main: Function = ({setIsHovering}: { setIsHovering: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
	const [isActiveProfile, setIsActiveProfile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	return (
		<main className={styles.Main}>
			<Header setIsHovering={setIsHovering}/>
			<div className={`${styles.Main__grid} ${!isActiveProfile ? styles.Main__grid_one : ''}`}>
				<div className={styles.Main__elements}>
					<Metrics/>
					<Statistic/>
					<Recommended/>
				</div>
				<Profile isActiveProfile={isActiveProfile} setIsActiveProfile={setIsActiveProfile}/>
			</div>
		</main>
	);
};

export default Main;
