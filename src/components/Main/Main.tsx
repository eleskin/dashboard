import {connect, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {setActiveWebsite} from '../../store/slices/websites';
import styles from './Main.module.css';
import {Dispatch, JSXElementConstructor, SetStateAction, useEffect, useState} from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import {Dispatch as ReduxDispatch} from '@reduxjs/toolkit';

const Main: JSXElementConstructor<any> = ({
	                                          setIsHovering,
	                                          children,
	                                          websites,
                                          }: { setIsHovering: Dispatch<SetStateAction<boolean>>, children: JSX.Element, websites: Array<object> }): JSX.Element => {
	const dispatch: ReduxDispatch = useDispatch();
	const [isActiveProfile, setIsActiveProfile]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(true));
	const {website: websiteURL} = useParams();
	
	useEffect(() => {
		websites.forEach((website: any, index: number) => {
			const currentURL: URL = new URL(website.url);
			if (currentURL.host === websiteURL) dispatch(setActiveWebsite(index));
		});
	}, [dispatch, websiteURL, websites]);
	
	useEffect((): () => void => {
		const handleResize: EventListener | Function | any = (event: Event | any): void => {
			if (event.target.innerWidth <= 720 && isActiveProfile) {
				setIsActiveProfile(false);
			}
		};
		
		window.addEventListener('resize', handleResize);
		return (): void => window.removeEventListener('resize', handleResize);
	}, [isActiveProfile]);
	
	useEffect((): void => {
		if (window.innerWidth <= 720 && isActiveProfile) {
			setIsActiveProfile(false);
		}
	}, []);
	
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

export default connect(
	(state: any, props: any): any => ({
		setIsHovering: props.setIsHovering,
		children: props.children,
		websites: state.websitesSlice.websites,
	}),
)(Main);
