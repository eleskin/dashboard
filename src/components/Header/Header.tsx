import styles from './Header.module.css';

import Accounts from '../Accounts/Accounts';

const Header: Function = (): JSX.Element => {
	return (
		<header className={styles.Header}>
			<Accounts/>
		</header>
	);
};

export default Header;
