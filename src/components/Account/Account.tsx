import {connect, useDispatch, useSelector} from 'react-redux';
import {logout} from '../../store/slices/user';
import {getFaviconURL} from '../../utils/functions';
import styles from './Account.module.css';
import {Dispatch, JSXElementConstructor, MouseEventHandler, SetStateAction, useEffect, useMemo, useState} from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faUser, faMoneyBill1, faBell} from '@fortawesome/free-regular-svg-icons';
import {faArrowRightFromBracket, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {Dispatch as ReduxDispatch} from '@reduxjs/toolkit';

const Account: JSXElementConstructor<any> = ({
	                                             isHovering,
	                                             websites,
                                             }: { isHovering: boolean, websites: Array<any> }): JSX.Element => {
	const dispatch: ReduxDispatch = useDispatch();
	const [isActiveDropdown, setIsActiveDropdown]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	const activeWebsite = useSelector((state: any): number => state['websitesSlice'].activeWebsite.payload);
	const [activeAccountIndex, setActiveAccountIndex]: [number, Dispatch<SetStateAction<number>>] = useState(activeWebsite !== undefined ? activeWebsite : 0);
	
	useEffect((): void => {
		setActiveAccountIndex(activeWebsite !== undefined ? activeWebsite : 0);
	}, [activeWebsite]);
	
	
	const AccountWebsite: JSX.Element = useMemo(() => {
		let faviconURL: string = '';
		let websiteURL: string = '';
		
		if (websites.length && activeAccountIndex !== undefined) {
			const url: URL = new URL(websites[activeAccountIndex]?.url);
			faviconURL = getFaviconURL(url);
			websiteURL = url.host.charAt(0).toUpperCase() + url.host.slice(1);
		}
		
		return (
			<div className={styles.Account__website}>
				<div className={styles.Account__icon}>
					<i><img src={faviconURL} alt=""/></i>
				</div>
				<span className={styles.Account__url}>{websiteURL}</span>
				<span className={styles.Account__role}>ADMINISTRATOR</span>
			</div>
		);
	}, [activeAccountIndex, websites]);
	
	const handleButtonClick: MouseEventHandler = (): void => setIsActiveDropdown(true);
	const handleMouseLeave: MouseEventHandler = (): void => setIsActiveDropdown(false);
	
	const handleLogoutClick: MouseEventHandler = (event: MouseEvent | any): void => {
		event.preventDefault();
		dispatch(logout());
	};
	
	return (
		<div className={`${styles.Account} ${isHovering ? styles.Account_hover : ''} ${isActiveDropdown ? styles.Account_active : ''}`}>
			<i/>
			{AccountWebsite}
			<button className={styles.Account__button} onClick={handleButtonClick}>
				<FontAwesomeIcon icon={faChevronDown}/>
			</button>
			<div className={styles.Account__dropdown} onMouseLeave={handleMouseLeave}>
				{AccountWebsite}
				<ul className={styles.Account__menu}>
					<li><Link to="/"><FontAwesomeIcon icon={faEnvelope}/> Incoming Mail</Link></li>
					<li><Link to="/"><FontAwesomeIcon icon={faUser}/> Profile Details</Link></li>
					<li><Link to="/"><FontAwesomeIcon icon={faMoneyBill1}/> Billing Details</Link></li>
					<li><Link to="/"><FontAwesomeIcon icon={faBell}/> Notifications</Link></li>
					<li>
						<Link to="" onClick={handleLogoutClick}>
							<FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default connect(
	(state: any, props: any): any => ({
		isHovering: props.isHovering,
		websites: state.websitesSlice.websites,
	}),
)(Account);
