import styles from './Select.module.css';

const Select: Function = ({options}: { options: string[] }): JSX.Element => {
	const optionsList: JSX.Element[] = options.map((option, index) => (
		<option value={option} key={index}>{option}</option>
	));
	
	return (
		<select className={styles.Select}>
			{optionsList}
		</select>
	);
};

export default Select;
