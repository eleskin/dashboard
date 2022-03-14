import styles from './Account.module.css';
import {Dispatch, MouseEventHandler, SetStateAction, useMemo, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faUser, faMoneyBill1, faBell} from '@fortawesome/free-regular-svg-icons';
import {faArrowRightFromBracket, faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {useGetFaviconURL} from '../../utils/hooks';

const Account: Function = ({isHovering}: { isHovering: boolean }): JSX.Element => {
	const [isActiveDropdown, setIsActiveDropdown]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	
	const [websiteURL]: [string, Dispatch<SetStateAction<string>>] = useState('https://apple.com/');
	const [faviconURL]: [string, Dispatch<SetStateAction<string>>] = useGetFaviconURL(websiteURL);
	
	const AccountWebsite: JSX.Element = useMemo(() => (
		<div className={styles.Account__website}>
			<div className={styles.Account__icon}>
				<i><img src={faviconURL} alt=""/></i>
			</div>
			<span className={styles.Account__url}>Apple.com</span>
			<span className={styles.Account__role}>ADMINISTRATOR</span>
		</div>
	), [faviconURL]);
	
	const handleButtonClick: MouseEventHandler = (): void => setIsActiveDropdown(true);
	const handleMouseLeave: MouseEventHandler = (): void => setIsActiveDropdown(false);
	
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
