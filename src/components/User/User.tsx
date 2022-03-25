import styles from './User.module.css';
import {Link} from 'react-router-dom';
import user_icon_1 from '../../assets/images/user/user-icon-1.svg';
import user_icon_2 from '../../assets/images/user/user-icon-2.svg';

const User: Function = (): JSX.Element => {
	return (
		<div className={styles.User}>
			<Link to="/" className={styles.User__messages}>
				<img src={user_icon_1} alt=""/>
				<i>{12}</i>
			</Link>
			<Link to="/" className={styles.User__settings}>
				<img src={user_icon_2} alt=""/>
			</Link>
			<Link to="/" className={styles.User__profile}>
			
			</Link>
		</div>
	);
};

export default User;
