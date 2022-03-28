import {combineReducers, configureStore, Reducer, Store} from '@reduxjs/toolkit';
import userSlice from './slices/user';

const rootReducer: Reducer = combineReducers({
	userSlice
});

const store: Store = configureStore({
	reducer: rootReducer,
});

export default store;
