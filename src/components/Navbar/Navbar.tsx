import {Dispatch, MouseEventHandler, SetStateAction, useState} from 'react';
import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

const Navbar: Function = (): JSX.Element => {
	const [isHovering, setIsHovering]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(Boolean(false));
	
	const handleMouseOver: MouseEventHandler = (): void => setIsHovering(true);
	const handleMouseLeave: MouseEventHandler = (): void => setIsHovering(false);
	
	return (
		<aside
			className={`${styles.Navbar} ${isHovering && styles.Navbar_hover}`}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
		>
			<Logo isHovering={isHovering}/>
			<Account isHovering={isHovering}/>
			<Navigation isHovering={isHovering}/>
		</aside>
	);
};

export default Navbar;
