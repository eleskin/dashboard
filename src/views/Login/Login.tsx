import {Navigate} from 'react-router-dom';
import styles from './Login.module.css';
import {Dispatch, FormEvent, FormEventHandler, JSXElementConstructor, SetStateAction, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {login} from '../../store/slices/user';
import Form from '../../components/Form/Form';
import Title from '../../components/Title/Title';

const Login: JSXElementConstructor<any> = ({isAuth, isRegistered}: { isAuth: boolean, isRegistered: boolean }): JSX.Element => {
	const dispatch = useDispatch();
	const [emailField, setEmailField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordField, setPasswordField]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const [emailFieldError, setEmailFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [passwordFieldError, setPasswordFieldError]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const handleFormSubmit: FormEventHandler = (event: FormEvent): void => {
		event.preventDefault();

		dispatch(login({
			email: emailField,
			password: passwordField,
		})).then((data: any): void => {
			if (data.payload?.conflictFields?.length) {
				if (data.payload.conflictFields[0] === 'email') {
					setEmailFieldError('Invalid email address entered');
				} else if (data.payload.conflictFields[0] === 'password') {
					setPasswordFieldError('Invalid password entered');
				} else {
					setEmailFieldError('Invalid email address entered');
					setPasswordFieldError('Invalid password entered');
				}
			}
		}).catch(console.log);
	};
	
	return !isRegistered ? (
		<div className={`${styles.Login} ${!isAuth ? styles.Login_start : ''}`}>
			{isAuth && <Title value="Sign In Account"/>}
			<form className={styles.Login__form} onSubmit={handleFormSubmit}>
				<Form>
					<Form.Header title="Sign In" subtitle={isAuth ? 'Please fill in the form fields' : ''}/>
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
					</Form.Row>
					<Form.Footer>
						<Form.Button>Sign In</Form.Button>
						{isAuth ? (
							<Form.Link to='/register'>Sign Up</Form.Link>
						) : (
							<Form.Link to='/start'>Not registered yet? Get Started</Form.Link>
						)}
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
		isAuth: state.userSlice.isAuth,
		isRegistered: state.userSlice.isRegistered,
	}),
)(Login);
