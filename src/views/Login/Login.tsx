import {Dispatch, FormEvent, FormEventHandler, SetStateAction, useState} from 'react';
import styles from './Login.module.css';
import Form from '../../components/Form/Form';

const Login: Function = (): JSX.Element => {
	const [websiteURL, setWebsiteURL]: [string, Dispatch<SetStateAction<string>>] = useState('');
	
	const isURL: Function = (string: string): boolean => {
		const pattern: RegExp = new RegExp('^(https?:\\/\\/)?' + // protocol
			'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
			'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
			'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
			'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
			'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
		return pattern.test(string);
	};
	
	const normalizeURL: Function = (url: string): string => {
		let currentURL: string = url;
		if (url.search('http://') === -1 || url.search('https://') === -1) {
			currentURL = `https://${url}`;
		}
		
		return currentURL;
	};
	
	const getValidURL: Function = (url: string) => {
		if (isURL(url)) {
			try {
				const websiteURL: URL = new URL(normalizeURL(url));
				return websiteURL;
			} catch (error: Error | any) {
				throw new Error(error);
			}
		} else {
			throw new Error('Error');
		}
	};
	
	const handleFormSubmit: FormEventHandler = (event: FormEvent): void => {
		event.preventDefault();
		
		localStorage.setItem('current_website', getValidURL(websiteURL).toString());
	};
	
	return (
		<div className={styles.Login}>
			<form className={styles.Login__container} onSubmit={handleFormSubmit}>
				<Form>
					<Form.Header title="To get started, enter your website address"/>
					<Form.Row>
						<Form.Input
							type="text"
							label="Website Address"
							placeholder="Enter Website Address"
							required={true}
							value={websiteURL}
							onInput={(event: InputEvent | any): void => setWebsiteURL(event.target.value)}
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

export default Login;
