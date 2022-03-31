export const getToken: Function = (): string => `${localStorage.getItem('token_type')} ${localStorage.getItem('access_token')}`;

export const deleteToken: Function = (): void => {
	localStorage.removeItem('access_token');
	localStorage.removeItem('token_type');
	localStorage.removeItem('expires_in');
};

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
