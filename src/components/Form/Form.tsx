import styles from './Form.module.css';

const Input: Function = ({label, ...props}: { label: string }): JSX.Element => {
	return (
		<label className={styles.Input}>
			{label && <span>{label}</span>}
			<input {...props}/>
		</label>
	);
};

const Select: Function = ({label, options, ...props}: { label: string, options: Array<string> }): JSX.Element => {
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

const Form: Function & { Input: Function, Select: Function } = ({children}: { children: JSX.Element }): JSX.Element => {
	return (
		<div className={styles.Form}>{children}</div>
	);
};

Form.Input = Input;
Form.Select = Select;

export default Form;
