import styles from './Form.module.css';

const Row: Function = ({children, ...props}: { children: JSX.Element }): JSX.Element => {
	return (
		<div {...props} className={styles.Form__row}>{children}</div>
	);
};

const Input: Function = ({label, ...props}: { label: string }): JSX.Element => {
	return (
		<label className={styles.Form__input}>
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
		<label className={styles.Form__select}>
			<span>{label}</span>
			<select {...props}>{optionsList}</select>
		</label>
	);
};

const Header: Function = ({title, ...props}: { title: string }): JSX.Element => {
	return (
		<header {...props} className={styles.FormHeader}>
			<h2>{title}</h2>
		</header>
	);
};

const Button: Function = ({children, ...props}: {children: JSX.Element}): JSX.Element => {
	return (
		<button {...props} className={styles.Form__button} type="submit">{children}</button>
	)
};

interface IForm {
	Input: Function,
	Select: Function,
	Row: Function,
	Header: Function,
	Button: Function
}

const Form: Function & IForm = ({children}: { children: JSX.Element }): JSX.Element => {
	return (
		<div className={styles.Form}>{children}</div>
	);
};

Form.Input = Input;
Form.Select = Select;
Form.Row = Row;
Form.Header = Header;
Form.Button = Button;

export default Form;
