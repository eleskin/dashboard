import styles from './Service.module.css';
import service_image_1 from '../../assets/images/service/service-image-1.png';

const Service: Function = ({tag, title}: { tag: string, title: string }): JSX.Element => {
	return (
		<div className={styles.Service} style={{backgroundImage: `url(${service_image_1})`}}>
			<span className={styles.Service__tag}>{tag}</span>
			<h3 className={styles.Service__title}>{title}</h3>
			<button className={styles.Service__button}>Read more</button>
		</div>
	);
};

export default Service;
