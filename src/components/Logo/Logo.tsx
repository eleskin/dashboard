import styles from './Logo.module.css';

const Logo: Function = ({isHovering}: { isHovering: boolean }): JSX.Element => {
	return (
		<div className={`${styles.Logo} ${isHovering ? styles.Logo_hover : ''}`}>
			<a href="/" className={styles.Logo__container}>
				<i className={styles.Logo__icon}/>
				<span className={styles.Logo__label}>CLEAN ADMIN</span>
			</a>
		</div>
	);
};

export default Logo;
