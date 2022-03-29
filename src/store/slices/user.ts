import {createAsyncThunk, createSlice, Slice} from '@reduxjs/toolkit';
import axios from 'axios';
import {isValidURL, setToken} from '../../utils/functions';

const checkURL: Function = (): Promise<boolean> => new Promise((resolve: Function, reject: Function): void => {
	isValidURL(localStorage.getItem('current_website')) ? resolve(true) : reject(false);
});

export const authenticate: any = createAsyncThunk(
	'user/authenticate',
	async (): Promise<boolean | undefined> => {
		try {
			const response: boolean = await checkURL();
			
			if (response) {
				return true;
			}
			
			return undefined;
		} catch (error: Error | any) {
			throw new Error(error);
		}
	},
	{},
);

export const register = createAsyncThunk(
	'user/register',
	async ({
		       firstName,
		       lastName,
		       tel,
		       email,
		       password,
		       passwordConfirmation,
	       }: { firstName: string, lastName: string, tel: string, email: string, password: string, passwordConfirmation: string }): Promise<object | undefined> => {
		try {
			const response = await axios.post('http://localhost/api/auth/register', {
				firstName,
				lastName,
				tel,
				email,
				password,
				passwordConfirmation,
			});
			
			if (response.status === 200) {
				setToken(response.data);
				return {id: response.data.id, name: response.data.name};
			}
			
			return undefined;
		} catch (error: Error | any) {
			throw new Error(error);
		}
	},
);

const initialState: {
	isLoading: boolean,
	isAuth: boolean | null
} = {
	isLoading: false,
	isAuth: null,
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
		login(state: any): void {
			state.isAuth = true;
		},
	},
	extraReducers: {
		[authenticate.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload) {
				state.isAuth = payload;
			}
		},
		[authenticate.rejected]: (state: typeof initialState): void => {
			state.isAuth = false;
		},
	},
});

export const {loaded, loading, login} = slice.actions;
export default slice.reducer;
