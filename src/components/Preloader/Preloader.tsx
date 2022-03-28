import styles from './Preloader.module.css';

const Preloader: Function = ({children, isLoading}: { children: JSX.Element, isLoading: boolean }): JSX.Element => {
	return (
		<div className={`${styles.Preloader} ${isLoading ? styles.Preloader_active : ''}`}>
			{children}
			<div className={styles.Preloader__container}>
				<div className={styles.Preloader__spinner}><div/><div/><div/><div/></div>
				<span>Please wait, everything will be ready soon</span>
			</div>
		</div>
	);
};

export default Preloader;
