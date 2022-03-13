import styles from './Header.module.css';

import Accounts from '../Accounts/Accounts';
import User from '../User/User';

const Header: Function = (): JSX.Element => {
	return (
		<header className={styles.Header}>
			<Accounts/>
			<User/>
		</header>
	);
};

export default Header;
