import {Navigate} from 'react-router-dom';
import styles from './Register.module.css';
import {Dispatch, FormEvent, FormEventHandler, JSXElementConstructor, SetStateAction, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {register} from '../../store/slices/user';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

const Register: JSXElementConstructor<any> = ({isRegistered}: { isRegistered: boolean }): JSX.Element => {
	const dispatch = useDispatch();
	const [firstNameField, setFirstNameField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [lastNameField, setLastNameField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [phoneNumberField, setPhoneNumberField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [emailField, setEmailField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordField, setPasswordField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordConfirmationField, setPasswordConfirmationField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const [phoneNumberFieldError, setPhoneNumberFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [emailFieldError, setEmailFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordFieldError, setPasswordFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const handleFormSubmit: FormEventHandler = (event: FormEvent): void => {
		event.preventDefault();
		if (passwordField !== passwordConfirmationField) {
			setPasswordFieldError('Passwords do not match');
			return undefined;
		}
		
		dispatch(register({
			firstName: firstNameField,
			lastName: lastNameField,
			phoneNumber: phoneNumberField,
			email: emailField,
			password: passwordField,
			passwordConfirmation: passwordConfirmationField,
		})).then((data: any): void => {
			if (data.payload?.conflictFields) {
				if (data.payload.conflictFields.length === 2) {
					setPhoneNumberFieldError('A user with this phone number is already registered');
					setEmailFieldError('User with this email is already registered');
				} else if (data.payload.conflictFields.length === 1) {
					if (data.payload.conflictFields[0] === 'phone_number') {
						setPhoneNumberFieldError('A user with this phone number is already registered');
					} else if (data.payload.conflictFields[0] === 'email') {
						setEmailFieldError('User with this email is already registered');
					}
				}
			}
		});
	};
	
	return !isRegistered ? (
		<div className={styles.Register}>
			<Title value="Sign Up Account"/>
			<form className={styles.Register__form} onSubmit={handleFormSubmit}>
				<Form>
					<Form.Header title="Sign Up" subtitle="Please fill in the form fields"/>
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
							value={phoneNumberField}
							onInput={(event: InputEvent | any): void => {
								setPhoneNumberField(event.target.value);
								setPhoneNumberFieldError('');
							}}
							error={phoneNumberFieldError}
						/>
					</Form.Row>
					<Form.Row>
						<Form.Input
							type="email"
							label="Email Address"
							placeholder="Enter Email Address"
							required={true}
							value={emailField}
							onInput={(event: InputEvent | any): void => {
								setEmailField(event.target.value);
								setEmailFieldError('');
							}}
							error={emailFieldError}
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
						<Form.Link to="/login">Sign in</Form.Link>
					</Form.Footer>
				</Form>
			</form>
		</div>
	) : (
		<Navigate to="/"/>
	);
};

export default connect(
	(state: any): any => ({
		isRegistered: state.userSlice.isRegistered,
	}),
)(Register);
