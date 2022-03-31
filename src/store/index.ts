import {combineReducers, configureStore, Reducer, Store} from '@reduxjs/toolkit';
import userSlice from './slices/user';
import websitesSlice from './slices/websites';

const rootReducer: Reducer = combineReducers({
	userSlice,
	websitesSlice,
});

const store: Store = configureStore({
	reducer: rootReducer,
});

export default store;
