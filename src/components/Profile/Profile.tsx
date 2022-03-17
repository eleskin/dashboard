import styles from './Profile.module.css';
import {Dispatch, MouseEventHandler, SetStateAction, useState} from 'react';
import Headline from '../Headline/Headline';
import Progress from '../Progress/Progress';
import Bonus from '../Bonus/Bonus';
import Steps from '../Steps/Steps';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Profile: Function = (): JSX.Element => {
	const [isActiveProfile, setIsActiveProfile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	
	const handleButtonClick: MouseEventHandler = (): void => setIsActiveProfile(!isActiveProfile);
	
	return (
		<div className={`${styles.Profile} ${isActiveProfile ? styles.Profile_active : ''}`}>
			<button className={styles.Profile__toggle} onClick={handleButtonClick}>
				<FontAwesomeIcon icon={faChevronLeft}/>
			</button>
			<div className={styles.Profile__container}>
				<h3 className={styles.Profile__title}>
					<span>Profile Completion</span>
					<button onClick={handleButtonClick}>
						<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g clipPath="url(#clip0_0_37)">
								<path d="M7.00001 0C6.02489 0 5.11444 0.183898 4.26867 0.551694C3.41294 0.90953 2.66916 1.40652 2.03731 2.04266C1.40548 2.67879 0.905476 3.41929 0.537316 4.26416C0.179105 5.11891 0 6.02836 0 6.99253C0 7.96666 0.179105 8.87615 0.537316 9.72101C0.905476 10.5758 1.40548 11.3188 2.03731 11.9499C2.66916 12.5811 3.41294 13.0806 4.26867 13.4483C5.11444 13.8161 6.02489 14 7.00001 14C7.97513 14 8.88558 13.8161 9.73135 13.4483C10.5871 13.0806 11.3308 12.5811 11.9627 11.9499C12.5946 11.3188 13.0946 10.5758 13.4627 9.72101C13.8209 8.87615 14 7.96666 14 6.99253C14 6.02836 13.8209 5.11891 13.4627 4.26416C13.0946 3.41929 12.5946 2.67879 11.9627 2.04266C11.3308 1.40652 10.5871 0.90953 9.73135 0.551694C8.88558 0.183898 7.97513 0 7.00001 0ZM7.00001 12.7178C6.20399 12.7178 5.45772 12.5687 4.7612 12.2705C4.06468 11.9723 3.45772 11.5648 2.9403 11.048C2.42289 10.5311 2.01493 9.92472 1.71642 9.22897C1.41791 8.53322 1.26866 7.78774 1.26866 6.99253C1.26866 6.19739 1.41791 5.45191 1.71642 4.75609C2.01493 4.06034 2.42289 3.45404 2.9403 2.93721C3.45772 2.4203 4.06468 2.01277 4.7612 1.71463C5.45772 1.4164 6.20399 1.26729 7.00001 1.26729C7.79603 1.26729 8.5423 1.4164 9.23882 1.71463C9.93533 2.01277 10.5423 2.4203 11.0598 2.93721C11.5772 3.45404 11.9851 4.06034 12.2836 4.75609C12.5821 5.45191 12.7314 6.19739 12.7314 6.99253C12.7314 7.78774 12.5821 8.53322 12.2836 9.22897C11.9851 9.92472 11.5772 10.5311 11.0598 11.048C10.5423 11.5648 9.93533 11.9723 9.23882 12.2705C8.5423 12.5687 7.79603 12.7178 7.00001 12.7178ZM9.55225 6.36635H4.44777C4.25871 6.36635 4.10697 6.4235 3.99255 6.53778C3.87812 6.65214 3.8209 6.80372 3.8209 6.99253C3.8209 7.19137 3.87812 7.34793 3.99255 7.46222C4.10697 7.5765 4.25871 7.63365 4.44777 7.63365H9.55225C9.74131 7.63365 9.89305 7.5765 10.0075 7.46222C10.1219 7.34793 10.1791 7.19137 10.1791 6.99253C10.1791 6.80372 10.1219 6.65214 10.0075 6.53778C9.89305 6.4235 9.74131 6.36635 9.55225 6.36635Z" fill="#6D749B"/>
							</g>
							<defs>
								<clipPath id="clip0_0_37">
									<rect width="14" height="14" fill="white"/>
								</clipPath>
							</defs>
						</svg>
					</button>
				</h3>
				<Headline theme="dark"/>
				<Progress value={65}/>
				<Steps/>
				<Bonus/>
			</div>
		</div>
	);
};

export default Profile;
