import styles from './User.module.css';
import user_icon_1 from '../../assets/images/user/user-icon-1.svg';
import user_icon_2 from '../../assets/images/user/user-icon-2.svg';

const User: Function = (): JSX.Element => {
	return (
		<div className={styles.User}>
			<a href="/" className={styles.User__messages}>
				<img src={user_icon_1} alt=""/>
				<i>{12}</i>
			</a>
			<a href="/" className={styles.User__settings}>
				<img src={user_icon_2} alt=""/>
			</a>
			<a href="/" className={styles.User__profile}>
			
			</a>
		</div>
	);
};

export default User;
