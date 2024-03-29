import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import store from './store';
import {authenticateByLocalStorage, authenticate} from './store/slices/user';
import {dispatch} from './utils/functions';

dispatch(authenticate()).then((data: any): void => {
	if (!data.payload?.status) dispatch(authenticateByLocalStorage());
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App/>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
