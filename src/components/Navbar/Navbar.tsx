import styles from './Navbar.module.css';

import Logo from '../Logo/Logo';
import Account from '../Account/Account';
import Navigation from '../Navigation/Navigation';

const Navbar: Function = (): JSX.Element => {
	return (
		<aside className={styles.Navbar}>
			<Logo/>
			<Account/>
			<Navigation/>
		</aside>
	);
};

export default Navbar;
