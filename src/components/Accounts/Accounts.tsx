import {connect} from 'react-redux';
import {getFaviconURL} from '../../utils/functions';
import styles from './Accounts.module.css';
import {
	createRef,
	Dispatch, JSXElementConstructor, LegacyRef,
	MouseEventHandler,
	SetStateAction, useMemo,
	useState,
} from 'react';
import {Link} from 'react-router-dom';
import {useOutsideClickHandler} from '../../utils/hooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';

const Accounts: JSXElementConstructor<any> = ({websites}: { websites: Array<any> }): JSX.Element => {
	const [isActiveDropdown, setIsActiveDropdown]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	const [activeAccountIndex]: [number, Dispatch<SetStateAction<number>>] = useState(0);
	
	const handleButtonClick: MouseEventHandler = (): void => setIsActiveDropdown(!isActiveDropdown);
	
	const accountsElement: LegacyRef<HTMLDivElement> | undefined = createRef();
	
	useOutsideClickHandler(accountsElement, isActiveDropdown, setIsActiveDropdown);
	
	const accountsList: Array<JSX.Element> = websites.map((website: any, index: number): JSX.Element => {
		const url: URL = new URL(website.url);
		const faviconURL: string = getFaviconURL(url);
		
		return (
			<Link to="/" className={`${styles.Accounts__account} ${activeAccountIndex === index ? styles.Accounts__account_active : ''}`} key={index}>
				<div className={styles.Accounts__card}>
					<img src={faviconURL} alt=""/>
				</div>
				<div className={styles.Accounts__info}>
					<span>{url.host.charAt(0).toUpperCase() + url.host.slice(1)}</span>
					<i>Balance: ${0}</i>
				</div>
			</Link>
		);
	});
	
	const activeAccount: JSX.Element = useMemo((): JSX.Element => {
		let faviconURL: string = '';
		let websiteURL: string = '';
		if (websites.length) {
			const url: URL = new URL(websites[0]?.url);
			faviconURL = getFaviconURL(url);
			websiteURL = url.host.charAt(0).toUpperCase() + url.host.slice(1);
		}
		
		return (
			<div className={styles.Accounts__account}>
				<div className={styles.Accounts__card}>
					<img src={faviconURL} alt=""/>
				</div>
				<div className={styles.Accounts__info}>
					<span>{websiteURL}</span>
					<i>Balance: ${0}</i>
				</div>
			</div>
		);
	}, [websites]);
	
	return (
		<div
			className={`${styles.Accounts} ${isActiveDropdown ? styles.Accounts_active : ''}`}
			ref={accountsElement}
		>
			<div className={styles.Accounts__selected}>
				{activeAccount}
				<button className={styles.Accounts__button} onClick={handleButtonClick}>
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{transform: `${isActiveDropdown ? 'rotate(180deg)' : ''}`}}
					/>
				</button>
			</div>
			<div className={styles.Accounts__dropdown}>
				{accountsList}
				{/*<Link to="/" className={styles.Accounts__account}>*/}
				{/*	<div className={styles.Accounts__card}>*/}
				{/*		<img src={faviconURL} alt=""/>*/}
				{/*	</div>*/}
				{/*	<div className={styles.Accounts__info}>*/}
				{/*		<span>Apple.com</span>*/}
				{/*		<i>Balance: $5,304</i>*/}
				{/*	</div>*/}
				{/*</Link>*/}
				{/*<Link to="/" className={`${styles.Accounts__account} ${styles.Accounts__account_active}`}>*/}
				{/*	<div className={styles.Accounts__card}>*/}
				{/*		<img src={faviconURL} alt=""/>*/}
				{/*	</div>*/}
				{/*	<div className={styles.Accounts__info}>*/}
				{/*		<span>Apple.com</span>*/}
				{/*		<i>Balance: $5,304</i>*/}
				{/*	</div>*/}
				{/*</Link>*/}
				{/*<Link to="/" className={styles.Accounts__account}>*/}
				{/*	<div className={styles.Accounts__card}>*/}
				{/*		<img src={faviconURL} alt=""/>*/}
				{/*	</div>*/}
				{/*	<div className={styles.Accounts__info}>*/}
				{/*		<span>Apple.com</span>*/}
				{/*		<i>Balance: $5,304</i>*/}
				{/*	</div>*/}
				{/*</Link>*/}
				<button>
					<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M5.84542 5.84542V3.89695C5.84542 3.72444 5.90885 3.57476 6.03571 3.44791C6.16256 3.32106 6.31732 3.25763 6.49999 3.25763C6.68266 3.25763 6.83742 3.32106 6.96427 3.44791C7.09113 3.57476 7.15455 3.72444 7.15455 3.89695V5.84542H9.10303C9.27555 5.84542 9.42523 5.90885 9.55209 6.03571C9.67894 6.16256 9.74237 6.31733 9.74237 6.5C9.74237 6.68267 9.67894 6.83744 9.55209 6.96429C9.42523 7.09115 9.27555 7.15458 9.10303 7.15458H7.15455V9.10305C7.15455 9.27556 7.09113 9.42524 6.96427 9.55209C6.83742 9.67895 6.68266 9.74237 6.49999 9.74237C6.31732 9.74237 6.16256 9.67895 6.03571 9.55209C5.90885 9.42524 5.84542 9.27556 5.84542 9.10305V7.15458H3.89695C3.72443 7.15458 3.57474 7.09115 3.44789 6.96429C3.32103 6.83744 3.2576 6.68267 3.2576 6.5C3.2576 6.31733 3.32103 6.16256 3.44789 6.03571C3.57474 5.90885 3.72443 5.84542 3.89695 5.84542H5.84542ZM6.49999 13C5.60694 13 4.76463 12.8275 3.97306 12.4825C3.18149 12.1476 2.49141 11.6858 1.9028 11.0972C1.3142 10.5086 0.852452 9.81857 0.517559 9.027C0.17252 8.23537 0 7.39303 0 6.5C0 5.60697 0.17252 4.76467 0.517559 3.97311C0.852452 3.18155 1.3142 2.49145 1.9028 1.90282C2.49141 1.3142 3.18149 0.852468 3.97306 0.517627C4.76463 0.172543 5.60694 0 6.49999 0C7.39304 0 8.23534 0.172543 9.02692 0.517627C9.81846 0.852468 10.5085 1.3142 11.0972 1.90282C11.6858 2.49145 12.1475 3.18155 12.4824 3.97311C12.8274 4.76467 13 5.60697 13 6.5C13 7.39303 12.8274 8.23537 12.4824 9.027C12.1475 9.81857 11.6858 10.5086 11.0972 11.0972C10.5085 11.6858 9.81846 12.1476 9.02692 12.4825C8.23534 12.8275 7.39304 13 6.49999 13ZM6.49999 11.6908C7.22052 11.6908 7.89538 11.5589 8.52458 11.2951C9.15377 11.0211 9.70433 10.6481 10.1763 10.1763C10.6481 9.70433 11.021 9.15379 11.295 8.52463C11.5589 7.89541 11.6908 7.22053 11.6908 6.5C11.6908 5.77947 11.5589 5.10463 11.295 4.47548C11.021 3.84625 10.6481 3.29571 10.1763 2.82384C9.70433 2.3519 9.15377 1.97894 8.52458 1.70497C7.89538 1.44109 7.22052 1.30915 6.49999 1.30915C5.77946 1.30915 5.1046 1.44109 4.4754 1.70497C3.8462 1.97894 3.29566 2.3519 2.82376 2.82384C2.35187 3.29571 1.97892 3.84625 1.70492 4.47548C1.44106 5.10463 1.30913 5.77947 1.30913 6.5C1.30913 7.22053 1.44106 7.89541 1.70492 8.52463C1.97892 9.15379 2.35187 9.70433 2.82376 10.1763C3.29566 10.6481 3.8462 11.0211 4.4754 11.2951C5.1046 11.5589 5.77946 11.6908 6.49999 11.6908Z" fill="white"/>
					</svg>
					<span>Add Account</span>
				</button>
			</div>
		</div>
	);
};

export default connect(
	(state: any): any => ({
		websites: state.websitesSlice.websites,
	}),
)(Accounts);
