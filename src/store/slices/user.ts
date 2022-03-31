import {createAsyncThunk, createSlice, Slice} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {deleteToken, deleteWebsite, getToken, getURL, isValidURL, setToken} from '../../utils/functions';

const checkURL: Function = (): Promise<boolean> => new Promise((resolve: Function, reject: Function): void => {
	isValidURL(localStorage.getItem('current_website')) ? resolve(true) : reject(false);
});

export const authenticateByLocalStorage: any = createAsyncThunk(
	'user/authenticateByLocalStorage',
	async (): Promise<boolean | undefined> => {
		try {
			const response: boolean = await checkURL();
			
			if (response) {
				return true;
			}
			
			return undefined;
		} catch (error: Error | any) {
			deleteWebsite();
			throw new Error(error);
		}
	},
	{},
);

export const authenticate: any = createAsyncThunk(
	'user/authenticate',
	async (): Promise<object | undefined> => {
		try {
			const response: AxiosResponse = await axios.get('http://localhost/api/auth/user', {
				headers: {
					Authorization: getToken(),
				},
			});
			
			if (response.status === 200) {
				deleteWebsite();
				return {status: true, id: response.data.id, name: response.data.name};
			}
			
			return undefined;
		} catch (error: Error | any) {
			deleteToken();
			throw new Error(error);
		}
	},
	{},
);

export const register: any = createAsyncThunk(
	'user/register',
	async ({
		       firstName,
		       lastName,
		       phoneNumber,
		       email,
		       password,
		       passwordConfirmation,
	       }: { firstName: string, lastName: string, phoneNumber: string, email: string, password: string, passwordConfirmation: string }): Promise<object | undefined> => {
		try {
			const response: AxiosResponse = await axios.post('http://localhost/api/auth/register', {
				first_name: firstName,
				last_name: lastName,
				phone_number: phoneNumber,
				email: email,
				password: password,
				password_confirmation: passwordConfirmation,
				website_url: getURL(),
			});
			
			if (response.status === 200) {
				setToken(response.data.token.original);
				deleteWebsite();
				return {status: true, id: response.data.user.id, name: response.data.user.name};
			}
			
			if (response.status === 208) {
				return {status: false, conflictFields: response.data.conflict_fields};
			}
			
			return undefined;
		} catch (error: Error | any) {
			throw new Error(error);
		}
	},
);

export const login: any = createAsyncThunk(
	'user/login',
	async ({email, password}: { email: string, password: string }): Promise<object | undefined> => {
		try {
			const response: AxiosResponse = await axios.post('http://localhost/api/auth/login', {
				email,
				password,
			});
			
			if (response.status === 200) {
				setToken(response.data.token.original);
				deleteWebsite();
				return {status: true, id: response.data.user.id, name: response.data.user.name};
			}
			
			if (response.status === 204) {
				return {status: false, conflictFields: ['email']};
			}
			
			return undefined;
		} catch (error: Error | any) {
			throw new Error(error);
		}
	},
);

const initialState: {
	isLoading: boolean,
	isAuth: boolean | null,
	isRegistered: boolean
} = {
	isLoading: true,
	isAuth: null,
	isRegistered: false,
};

const slice: Slice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		loaded(state: any): void {
			state.isLoading = false;
		},
		loading(state: any): void {
			state.isLoading = true;
		},
		setLogin(state: any): void {
			state.isAuth = true;
			state.isLoading = false;
		},
	},
	extraReducers: {
		[authenticateByLocalStorage.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload) {
				state.isAuth = payload;
				state.isLoading = false;
			}
		},
		[authenticateByLocalStorage.rejected]: (state: typeof initialState): void => {
			state.isAuth = false;
			state.isLoading = false;
		},
		[authenticate.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload.status) {
				state.isAuth = true;
				state.isRegistered = true;
			}
			state.isLoading = false;
		},
		[authenticate.rejected]: (state: typeof initialState): void => {
			state.isRegistered = false;
			state.isLoading = false;
		},
		[register.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload.status) {
				state.isAuth = true;
				state.isRegistered = true;
			}
			state.isLoading = false;
		},
		[login.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload.status) {
				state.isAuth = true;
				state.isRegistered = true;
			}
			state.isLoading = false;
		},
	},
});

export const {loaded, loading, setLogin} = slice.actions;
export default slice.reducer;
