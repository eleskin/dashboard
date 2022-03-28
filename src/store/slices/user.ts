import {createAsyncThunk, createSlice, Slice} from '@reduxjs/toolkit';
import {isValidURL} from '../../utils/functions';

export const authenticate: any = createAsyncThunk(
	'user/authenticate',
	async () => new Promise((resolve, reject) => {
		if (isValidURL(localStorage.getItem('current_website'))) {
			const currentURL: URL = new URL(localStorage.getItem('current_website') || '');
			resolve(currentURL.toString() as any);
		} else {
			reject(undefined as any);
			throw new Error('Invalid URL');
		}
		reject(undefined as any);
	}),
	{}
)

const slice: Slice = createSlice({
	name: 'user',
	initialState: {
		isLoading: false,
		isAuth: false,
	},
	reducers: {
		loaded(state: any): void {
			state.isLoading = false;
		},
		loading(state: any): void {
			state.isLoading = true;
		},
		logout(state: any): void {
			state.isAuth = false;
		},
		login(state: any): void {
			state.isAuth = true;
		},
	},
	extraReducers: {
		[authenticate.fulfilled]: (state, {payload}) => {
			if (payload) {
				state.isAuth = true;
			}
		},
		[authenticate.rejected]: (state) => {
			state.isAuth = false;
		},
	},
});

export const {loaded, loading, logout, login} = slice.actions;
export default slice.reducer;
