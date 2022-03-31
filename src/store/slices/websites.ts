import {createAsyncThunk, createSlice, Slice} from '@reduxjs/toolkit';
import axios, {AxiosResponse} from 'axios';
import {getToken} from '../../utils/functions/token';

export const getWebsites: any = createAsyncThunk(
	'websites/get',
	async (): Promise<any> => {
		try {
			const response: AxiosResponse = await axios.get('http://localhost/api/websites', {
				headers: {
					Authorization: getToken(),
				},
			});
			
			if (response.status === 200) {
				return {status: true, websites: response.data.websites};
			}
			
			return undefined;
		} catch (error: Error | any) {
			throw new Error(error);
		}
	},
	{},
);

const initialState: {
	websites: Array<object>
} = {
	websites: [],
};

const slice: Slice = createSlice({
	name: 'websites',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getWebsites.fulfilled]: (state: typeof initialState, {payload}: { payload: any }): void => {
			if (payload.status) {
				state.websites = payload.websites;
			}
		},
		[getWebsites.rejected]: (state: typeof initialState): void => {
			if (localStorage.getItem('current_website')) {
				state.websites = [{url: localStorage.getItem('current_website')}];
			}
		},
	},
});

export default slice.reducer;
