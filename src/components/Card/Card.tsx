import styles from './Card.module.css';

const Card: Function = ({children}: { children: JSX.Element }): JSX.Element => {
	return (
		<div className={styles.Card}>{children}</div>
	);
};

export default Card;
