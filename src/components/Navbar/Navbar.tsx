import {createRef, Dispatch, LegacyRef, MouseEventHandler, SetStateAction} from 'react';
import {useOutsideClickHandler} from '../../utils/hooks';
import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

const Navbar: Function = ({isHovering, setIsHovering}: {isHovering: boolean, setIsHovering: Dispatch<SetStateAction<boolean>>}): JSX.Element => {
	const handleMouseOver: MouseEventHandler = (): void => setIsHovering(true);
	const handleMouseLeave: MouseEventHandler = (): void => setIsHovering(false);
	
	const navElement: LegacyRef<HTMLDivElement> | undefined = createRef();
	
	useOutsideClickHandler(navElement, isHovering, setIsHovering);
	
	return (
		<aside
			className={`${styles.Navbar} ${isHovering ? styles.Navbar_hover : ''}`}
			onMouseOver={handleMouseOver}
			onMouseLeave={handleMouseLeave}
			ref={navElement}
		>
			<Logo isHovering={isHovering}/>
			<Account isHovering={isHovering}/>
			<Navigation isHovering={isHovering}/>
		</aside>
	);
};

export default Navbar;
