import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';

const Navbar: Function = (): JSX.Element => {
	return (
		<aside className={styles.Navbar}>
			<Logo/>
		</aside>
	);
};

export default Navbar;
