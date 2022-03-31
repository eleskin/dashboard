import styles from './Start.module.css';
import {Dispatch, FormEvent, FormEventHandler, SetStateAction, useState} from 'react';
import {getValidURL} from '../../utils/functions';
import Form from '../../components/Form/Form';
import {useDispatch} from 'react-redux';
import {loaded, loading, setLogin} from '../../store/slices/user';

const Start: Function = (): JSX.Element => {
	const [websiteURL, setWebsiteURL]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const [errorURL, setErrorURL]: [string, Dispatch<SetStateAction<string>>] = useState('');
	const dispatch = useDispatch();
	
	const handleInputChange: Function = (event: InputEvent | any): void => {
		setWebsiteURL(event.target.value);
		setErrorURL('');
	};
	
	const handleFormSubmit: FormEventHandler = (event: FormEvent): void => {
		event.preventDefault();
		
		try {
			localStorage.setItem('current_website', getValidURL(websiteURL).toString());
			dispatch(loading(undefined));
			
			setTimeout((): void => {
				dispatch(setLogin(undefined));
			}, 1000);
			
			setTimeout((): void => {
				dispatch(loaded(undefined));
			}, 2000);
		} catch {
			setErrorURL('Incorrect URL');
		}
	};
	
	return (
		<div className={styles.Start}>
			<form className={styles.Start__container} onSubmit={handleFormSubmit}>
				<Form>
					<Form.Header title="To get started, enter your website address"/>
					<Form.Row>
						<Form.Input
							type="text"
							label="Website Address"
							placeholder="Enter Website Address"
							error={errorURL}
							value={websiteURL}
							onInput={handleInputChange}
						/>
					</Form.Row>
					<Form.Row>
						<Form.Button>Get Started</Form.Button>
					</Form.Row>
				</Form>
			</form>
		</div>
	);
};

export default Start;
