import styles from './Bonus.module.css';

const Bonus: Function = (): JSX.Element => {
	return (
		<form className={styles.Bonus}>
			<span className={styles.Bonus__title}>BONUS</span>
			<p className={styles.Bonus__text}>Invite your friends and make money width referrals</p>
			<label className={styles.Bonus__input}>
				<input type="text" placeholder="Email address..." required={true}/>
				<input type="submit" value="Send"/>
			</label>
		</form>
	);
};

export default Bonus;
