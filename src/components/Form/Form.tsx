import styles from './Form.module.css';

const Input: Function = ({label}: {label: string}, props: object): JSX.Element => {
	return (
		<label className={styles.Input}>
			{label && <span>{label}</span>}
			<input {...props}/>
		</label>
	);
};

const Select: Function = ({label, options}: {label: string, options: Array<string>}, props: object): JSX.Element => {
	const optionsList: Array<JSX.Element> = options.map((option: string, index: number) => (
		<option value={option} key={index}>
			{option}
		</option>
	));
	
	return (
		<label className={styles.Select}>
			<span>{label}</span>
			<select {...props}>{optionsList}</select>
		</label>
	);
};

const Form: { Input: Function, Select: Function } = {
	Input: Input,
	Select: Select,
};

export default Form;
