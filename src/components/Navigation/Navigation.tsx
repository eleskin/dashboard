import styles from './Navigation.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import navigation_image_1 from '../../assets/images/navigation/navigation-icon-1.svg';
import navigation_image_2 from '../../assets/images/navigation/navigation-icon-2.svg';
import navigation_image_3 from '../../assets/images/navigation/navigation-icon-3.svg';
import navigation_image_4 from '../../assets/images/navigation/navigation-icon-4.svg';
import navigation_image_5 from '../../assets/images/navigation/navigation-icon-5.svg';
import navigation_image_6 from '../../assets/images/navigation/navigation-icon-6.svg';
import navigation_image_7 from '../../assets/images/navigation/navigation-icon-7.svg';

const Navigation: Function = ({isHovering}: { isHovering: boolean }): JSX.Element => {
	return (
		<div className={`${styles.Navigation} ${isHovering ? styles.Navigation_hover : ''}`}>
			<span className={styles.Navigation__label}>SERVICES</span>
			<ul className={styles.Navigation__list}>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_1} alt=""/> <i>Dashboard</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_2} alt=""/> <i>Google Ad</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_3} alt=""/> <i>SEO rank</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_4} alt=""/> <i>SEO reports</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_5} alt=""/> <i>SMM center</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
			</ul>
			<span className={styles.Navigation__label}>OTHERS</span>
			<ul className={styles.Navigation__list}>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_6} alt=""/> <i>Payments</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
				<li>
					<Link to="/">
						<span className={styles.Navigation__item}>
							<span><img src={navigation_image_7} alt=""/> <i>Help center</i></span>
							<i><FontAwesomeIcon icon={faChevronRight}/></i>
						</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
