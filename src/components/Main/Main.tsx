import styles from './Main.module.css';
import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';

const Main: Function = ({
	                        setIsHovering,
	                        children,
                        }: { setIsHovering: Dispatch<SetStateAction<boolean>>, children: JSX.Element }): JSX.Element => {
	const [isActiveProfile, setIsActiveProfile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	useEffect((): () => void => {
		const handleResize: EventListener = (event: Event | any): void => {
			if (event.target.innerWidth <= 720 && isActiveProfile) {
				setIsActiveProfile(false);
			}
		};
		
		window.addEventListener('resize', handleResize);
		return (): void => window.removeEventListener('resize', handleResize);
	}, [isActiveProfile]);
	
	return (
		<main className={styles.Main}>
			<Header setIsHovering={setIsHovering}/>
			<div className={`${styles.Main__grid} ${!isActiveProfile ? styles.Main__grid_one : ''}`}>
				<div className={styles.Main__elements}>{children}</div>
				<Profile isActiveProfile={isActiveProfile} setIsActiveProfile={setIsActiveProfile}/>
			</div>
		</main>
	);
};

export default Main;
