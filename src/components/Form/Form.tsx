import styles from './Form.module.css';
import {Link as RouterLink} from 'react-router-dom';

const Row: Function = ({children, ...props}: { children: JSX.Element }): JSX.Element => {
	return (
		<div {...props} className={styles.Form__row}>{children}</div>
	);
};

const Input: Function = ({label, error, ...props}: { label: string, error: string }): JSX.Element => {
	return (
		<label className={`${styles.Form__input} ${error ? styles.Form__input_incorrect : ''}`}>
			{label && <span>{label}</span>}
			<input {...props}/>
			<i>{error}</i>
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

const Header: Function = ({title, subtitle, ...props}: { title: string, subtitle?: string }): JSX.Element => {
	return (
		<header {...props} className={styles.Form__header}>
			<h2>{title}</h2>
			{subtitle && <span>{subtitle}</span>}
		</header>
	);
};

const Button: Function = ({children, ...props}: {children: JSX.Element}): JSX.Element => {
	return (
		<button {...props} className={styles.Form__button} type="submit">{children}</button>
	)
};

const Link: Function = ({children, to, ...props}: {children: JSX.Element, to: string}): JSX.Element => {
	return (
		<RouterLink {...props} to={to} className={styles.Form__link}>{children}</RouterLink>
	)
};

const Footer: Function = ({children, ...props}: {children: JSX.Element}): JSX.Element => {
	return (
		<footer {...props} className={styles.Form__footer}>{children}</footer>
	)
};

interface IForm {
	Input: Function,
	Select: Function,
	Row: Function,
	Header: Function,
	Button: Function,
	Link: Function,
	Footer: Function
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
Form.Link = Link;
Form.Footer = Footer;

export default Form;
