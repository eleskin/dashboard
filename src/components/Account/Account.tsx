import styles from './Account.module.css';

import {Dispatch, SetStateAction, useMemo, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faUser, faMoneyBill1, faBell} from '@fortawesome/free-regular-svg-icons';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Account: Function = (): JSX.Element => {
	const [websiteURL]: [string, Dispatch<SetStateAction<string>>] = useState('https://apple.com/');
	const [faviconURL]: [string, Dispatch<SetStateAction<string>>] = useState(`https://www.google.com/s2/favicons?domain=${websiteURL}`);
	
	const AccountWebsite: JSX.Element = useMemo(() => (
		<div className={styles.Account__website}>
			<div className={styles.Account__icon}>
				<i><img src={faviconURL} alt=""/></i>
			</div>
			<span className={styles.Account__url}>Apple.com</span>
			<span className={styles.Account__role}>ADMINISTRATOR</span>
		</div>
	), [faviconURL]);
	
	return (
		<div className={styles.Account}>
			<i/>
			{AccountWebsite}
			<button className={styles.Account__button}>
				<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0.888108 2.01807L0.798984 2.11789L0.888029 2.21778L5.38109 7.25815L5.49289 7.38357L5.60488 7.25832L10.1118 2.21795L10.2012 2.11805L10.1119 2.01807L9.50523 1.33859L9.39326 1.21317L9.28138 1.33867L5.50182 5.57819L1.71892 1.33825L1.60704 1.21284L1.4951 1.33821L0.888108 2.01807Z" fill="#424E5D" stroke="#424E5D" strokeWidth="0.3"/>
				</svg>
			</button>
			<div className={styles.Account__dropdown}>
				{AccountWebsite}
				<ul className={styles.Account__menu}>
					<li><a href="/"><FontAwesomeIcon icon={faEnvelope}/> Incoming Mail</a></li>
					<li><a href="/"><FontAwesomeIcon icon={faUser}/> Profile Details</a></li>
					<li><a href="/"><FontAwesomeIcon icon={faMoneyBill1}/> Billing Details</a></li>
					<li><a href="/"><FontAwesomeIcon icon={faBell}/> Notifications</a></li>
					<li><a href="/"><FontAwesomeIcon icon={faArrowRightFromBracket}/> Logout</a></li>
				</ul>
			</div>
		</div>
	);
};

export default Account;
