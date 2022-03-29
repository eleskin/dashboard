import styles from './Register.module.css';
import {Dispatch, FormEvent, FormEventHandler, SetStateAction, useState} from 'react';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

const Register: Function = (): JSX.Element => {
	const [firstNameField, setFirstNameField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [lastNameField, setLastNameField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [telField, setTelField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [emailField, setEmailField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordField, setPasswordField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordConfirmationField, setPasswordConfirmationField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const [passwordFieldError, setPasswordFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const handleFormSubmit: FormEventHandler = (event: FormEvent): void => {
		event.preventDefault();
		if (passwordField !== passwordConfirmationField) {
			setPasswordFieldError('Passwords do not match');
			return undefined;
		}
		
		console.log(1)
	};
	
	return (
		<div className={styles.Register}>
			<Title value="Signup Account"/>
			<form className={styles.Register__form} onSubmit={handleFormSubmit}>
				<Form>
					<Form.Header title="Default Layout" subtitle="Please fill in the form fields"/>
					<Form.Row>
						<Form.Input
							type="text"
							label="First Name"
							placeholder="Enter First Name"
							required={true}
							value={firstNameField}
							onInput={(event: InputEvent | any): void => setFirstNameField(event.target.value)}
						/>
						<Form.Input
							type="text"
							label="Last Name"
							placeholder="Enter Last Name"
							required={true}
							value={lastNameField}
							onInput={(event: InputEvent | any): void => setLastNameField(event.target.value)}
						/>
					</Form.Row>
					<Form.Row>
						<Form.Input
							type="tel"
							label="Phone Number"
							placeholder="Enter Phone Number"
							required={true}
							value={telField}
							onInput={(event: InputEvent | any): void => setTelField(event.target.value)}
						/>
					</Form.Row>
					<Form.Row>
						<Form.Input
							type="email"
							label="Email Address"
							placeholder="Enter Email Address"
							required={true}
							value={emailField}
							onInput={(event: InputEvent | any): void => setEmailField(event.target.value)}
						/>
					</Form.Row>
					<Form.Row>
						<Form.Input
							type="password"
							label="Password"
							placeholder="Enter Password"
							required={true}
							minLength={8}
							value={passwordField}
							onInput={(event: InputEvent | any): void => {
								setPasswordField(event.target.value);
								setPasswordFieldError('');
							}}
							error={passwordFieldError}
						/>
						<Form.Input
							type="password"
							label="Password Confirmation"
							placeholder="Enter Password Confirmation"
							required={true}
							minLength={8}
							value={passwordConfirmationField}
							onInput={(event: InputEvent | any): void => {
								setPasswordConfirmationField(event.target.value);
								setPasswordFieldError('');
							}}
							error={passwordFieldError}
						/>
					</Form.Row>
					<Form.Footer>
						<Form.Button>Create Account</Form.Button>
					</Form.Footer>
				</Form>
			</form>
		</div>
	);
};

export default Register;
