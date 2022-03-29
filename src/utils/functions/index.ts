const _isURL: Function = (string: string): boolean => {
	const pattern: RegExp = new RegExp('^(https?:\\/\\/)?' + // protocol
		'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
		'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
		'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
		'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
		'(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
	return pattern.test(string);
};

const _normalizeURL: Function = (url: string): string => {
	let currentURL: string = url;
	if (url.search('http://') === -1 || url.search('https://') === -1) {
		currentURL = `https://${url}`;
	}
	
	return currentURL;
};

export const getValidURL: Function = (url: string): URL => {
	if (_isURL(url)) {
		try {
			return new URL(_normalizeURL(url));
		} catch {
			throw new Error('Incorrect URL');
		}
	} else {
		throw new Error('Incorrect URL');
	}
};

export const isValidURL: Function = (url: string): boolean => {
	if (_isURL(url)) {
		try {
			new URL(_normalizeURL(url));
			return true;
		} catch {
			return false;
		}
	} else {
		return false;
	}
};

export const getToken: Function = (): string => `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`;

export const deleteToken: Function = (): void => localStorage.clear();

export const setToken: Function = (token: { access_token: string, token_type: string, expires_in: string }): void => {
	const {
		access_token,
		token_type,
		expires_in,
	}: { access_token: string, token_type: string, expires_in: string } = token;
	
	deleteToken();
	
	localStorage.setItem('access_token', access_token);
	localStorage.setItem('token_type', token_type);
	localStorage.setItem('expires_in', expires_in);
};
