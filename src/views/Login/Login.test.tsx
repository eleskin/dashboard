import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import store from '../../store';
import Login from './Login';
import {BrowserRouter as Router} from 'react-router-dom';

test('Login render', () => {
	render(
		<Provider store={store}>
			<Router>
				<Login/>
			</Router>
		</Provider>,
	);
	const firstElement = screen.getAllByText(/Sign In/i)[0] as HTMLAnchorElement;
	expect(firstElement).toBeInTheDocument();
});
