import {Dispatch, SetStateAction} from 'react';
import styles from './Header.module.css';

import Accounts from '../Accounts/Accounts';
import User from '../User/User';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Header: Function = ({setIsHovering}: {setIsHovering: Dispatch<SetStateAction<boolean>>}): JSX.Element => {
	return (
		<header className={styles.Header}>
			<button className={styles.Header__menu} onClick={(): void => setIsHovering(true)}>
				<FontAwesomeIcon icon={faBars}/>
			</button>
			<div className={styles.Header__container}>
				<Accounts/>
				<User/>
			</div>
		</header>
	);
};

export default Header;
