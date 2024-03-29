import styles from './Steps.module.css';
import React, {useCallback, MouseEvent, Dispatch, SetStateAction} from 'react';
import {Link} from 'react-router-dom';
import steps_icon_1 from '../../assets/images/steps/steps-icon-1.svg';
import steps_icon_2 from '../../assets/images/steps/steps-icon-2.svg';

const Steps: Function = ({
	                         isRegistered,
	                         isActiveProfile,
	                         setIsActiveProfile,
                         }: { isRegistered: boolean, isActiveProfile: boolean, setIsActiveProfile: Dispatch<SetStateAction<boolean>> }): JSX.Element => {
	
	const step: Function = useCallback((title: string, subtitle: string, isCompleted: boolean, link: string): JSX.Element => (
		<Link
			to={link}
			className={`${styles.Steps__step} ${isCompleted ? styles.Steps__step_completed : ''}`}
			onClick={(event: MouseEvent<HTMLAnchorElement>): boolean | void => {
				if (window.innerWidth <= 720 && isActiveProfile) {
					setIsActiveProfile(false);
				}
				isCompleted && event.preventDefault();
			}}
		>
			<div>
				<h5>{title}</h5>
				<span>{subtitle}</span>
			</div>
			<span>{isCompleted ? <img src={steps_icon_1} alt=""/> : <img src={steps_icon_2} alt=""/>}</span>
		</Link>
		// eslint-disable-next-line react-hooks/exhaustive-deps
	), []);
	
	
	return (
		<div className={styles.Steps}>
			{step('Signup account', 'You have registered account', isRegistered, '/register')}
			{step('Connect Google Analytics', 'You have connected account', false, '/')}
			{step('Add Facebook account', 'You can connect social media', false, '/')}
			{step('Deposit Money', 'You can deposit from your bank', false, '/')}
		</div>
	);
};

export default Steps;
