import styles from './Logo.module.css';
import {Link} from 'react-router-dom';

const Logo: Function = ({isHovering}: { isHovering: boolean }): JSX.Element => {
	return (
		<div className={`${styles.Logo} ${isHovering ? styles.Logo_hover : ''}`}>
			<Link to="/" className={styles.Logo__container}>
				<i className={styles.Logo__icon}/>
				<span className={styles.Logo__label}>CLEAN ADMIN</span>
			</Link>
		</div>
	);
};

export default Logo;
