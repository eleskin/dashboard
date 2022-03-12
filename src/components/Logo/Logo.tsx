import styles from './Logo.module.css';

const Logo: Function = (): JSX.Element => {
	return (
		<div className={styles.Logo}>
			<a href="/" className={styles.Logo__container}>
				<i className={styles.Logo__icon}/>
				<span className={styles.Logo__label}>CLEAN ADMIN</span>
			</a>
		</div>
	);
};

export default Logo;
